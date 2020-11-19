const command = () => {
  const img = document.querySelectorAll('.command__photo');
  let imgTarget;
  img.forEach((elem) => {
    elem.addEventListener('mouseover', (event) => {
      imgTarget = event.target.src;
      event.target.src = event.target.dataset.img;
    });
    elem.addEventListener('mouseout', (event) => {
      event.target.src = imgTarget;
    });
  });
};

export default command;