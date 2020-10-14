// "use strict";

let money,
  income = 'сдача в аренду';
addExpenses = 'Kоммуналка, Бензин, Кредит';
deposit = true;
mission = 150000;
period = 8;



// урок номер 5

// ф-ия проверки ввода числа
let isNumber = function (n) {
  // переводит сироку в число и проверяет на NaN и infinity
  return !isNaN(parseFloat(n)) && isFinite(n);
}


// ф-ия старта
let start = function () {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
  money = +money; // перевод в число
}

start();

// ф-ия расходов за месяц
let getExpensesMonth = function () {
  let sum = 0,
    s;
  for (i = 0; i < 2; i++) {
    // Статьи расходов
    prompt('Введите обязательную статью расходов № ' + (i + 1));
    do {
      s = prompt('Во сколько это обойдется?');
    } while (!isNumber(s));
    sum += +s;
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

// ф-ия месячный бюджет
let getAccumulatedMonth = function (data1, data2) {
  return data1 - data2;
};

// ф-ия достижение цели
let getTargetMonth = function (param1, param2) {
  return Math.ceil(param1 / param2);
};

// ф-ия статуса дохода
let getStatusIncome = function (param) {
  if (param > 1200) {
    console.log('У вас высокий уровень дохода');
  } else
    if (param > 600 && param <= 1200) {
      console.log('У вас средний уровень дохода');
    } else
      if (param > 0 && param <= 600) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
      } else {
        console.log('Вы тратите больше,чем зарабатываете!');
      }
};

// Запрос возможных расходов
addExpenses = (prompt
  ('Перечислите возможные расходы за рассчитываемый период (через запятую)', 'Kоммуналка, Музыкальная Школа, Кредит')
  .split(','));
console.log(addExpenses);

// Депозит в банке
deposit = confirm('Есть ли у вас депозит в банке?');
if (deposit) {
  console.log('Есть вклад в банке');
} else {
  console.log('Вклада в банке нет');
}

console.log('Расходы за месяц : ' + expensesAmount);

// Расчет бюджета на месяц
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

// Расчет достижения цели
console.log('Моя цель - накопить ' + mission);
if (getTargetMonth(mission, accumulatedMonth) < 0) {
  console.log('Цель НЕ будет достигнута');
} else {
  console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');
}

// Бюджет на день
budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день ' + budgetDay);

// Уровень дохода
getStatusIncome(budgetDay);



