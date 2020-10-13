// "use strict";

let money = 67000;
const income = 'сдача в аренду';
let addExpenses = 'Kоммуналка, Бензин, Кредит';
let deposit = true;
const mission = 150000;
const period = 8;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// урок номер 4

// ф-ия расходов за месяц
const getExpensesMonth = function (item1, item2) {
  return item1 + item2;
};

// ф-ия месячный бюджет
const getAccumulatedMonth = function (data1, data2) {
  return data1 - data2;
};

// ф-ия достижение цели
const getTargetMonth = function (param1, param2) {
  return Math.ceil(param1 / param2);
};

// ф-ия статуса дохода
const getStatusIncome = function (param) {
  if (param > 1200) {
    console.log('У вас высокий уровень дохода');
  } else
    if (param > 600 && param <= 1200) {
      console.log('У вас средний уровень дохода');
    } else
      if (param > 0 && param <= 600) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
      } else {
        console.log('Что то пошло не так');
      }
}




// Запрос месячного дохода
money = prompt('Ваш месячеый доход ?', 50000);
money = parseInt(money);

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

// Статьи расходов
expenses1 = prompt('Введите обязательную статью расходов', 'комуналка');
amount1 = +prompt('Во сколько это обойдется?', 7000);
expenses2 = prompt('Введите обязательную статью расходов', 'кредит');
amount2 = +prompt('Во сколько это обойдется?', 5000);
console.log(amount1, amount2);
console.log('Расходы за месяц : ' + getExpensesMonth(amount1, amount2));

// Расчет бюджета на месяц
const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));
console.log(accumulatedMonth);

// Расчет достижения цели
console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');

// Бюджет на день
budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день ' + budgetDay);

// Уровень дохода
getStatusIncome(budgetDay);



