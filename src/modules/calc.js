const calc = (price = 100) => {

  const
    calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcDay = document.querySelector('.calc-day'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');
  let total = 0,
    i = 0;

  const countSum = () => {
    let
      dayValue = 1,
      countValue = 1;

    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;
    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = Math.round(price * typeValue * squareValue * countValue * dayValue);
    }


    function updateTotal() {

      totalValue.textContent = i;
      i += 200;
      if (i > total) {
        totalValue.textContent = total;
        clearInterval(totalPrice);
      }
    }
    let totalPrice = setInterval(updateTotal, 1);
  };

  calcBlock.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^\d\.]/g, '');
    i = 0;
    const target = event.target;
    if (target === calcType || target === calcDay ||
      target === calcCount || target === calcSquare) {
      countSum();
    }
  });

};

export default calc;