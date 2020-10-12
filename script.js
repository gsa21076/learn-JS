// "use strict";

let money = 67000;
const income = 'сдача в аренду';
let addExpenses = 'Kоммуналка, Музыкальная Школа, Кредит';
let deposit = true;
const mission = 150000;
const period = 8;
let budgetMonth = 0;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месцев');
console.log('Цель: заработать ' + mission + ' рублей');
console.log((addExpenses.toLowerCase()).split(', '));

let budgetDay = money / 30;
console.log(budgetDay);

// урок номер 3
money = prompt('Ваш месячеый доход ?');
money = parseInt(money);


addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период (через запятую)');
console.log(addExpenses);

// Депозит в банке
deposit = confirm('Есть ли у вас депозит в банке?');
if (deposit) {
  console.log('Есть вклад в банке');
} else {
  console.log('Вклада в банке нет');
}

// Статьи расходов
expenses1 = prompt('Введите обязательную статью расходов');
amount1 = +prompt('Во сколько это обойдется?');
expenses2 = prompt('Введите обязательную статью расходов ');
amount2 = +prompt('Во сколько это обойдется?');

// Расчет бюджета на месяц
budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц ' + budgetMonth);

// Расчет достижения цели
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');

// Бюджет на день
budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день ' + budgetDay);

// Уровень дохода
if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else
  if (budgetDay > 600 && budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
  } else
    if (budgetDay > 0 && budgetDay <= 600) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else {
      console.log('Что то пошло не так');
    }


