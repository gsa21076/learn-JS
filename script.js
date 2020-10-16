// "use strict";


// ф-ия старта
let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?', 50000);
    } while (isNaN(money) || money === '' || money === null);
    // money = +money; // перевод в число
  }

start();

// ф-ия проверки ввода числа
let isNumber = function (n) {
  // переводит строку в число и проверяет на NaN и infinity
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let appData = {
  income: { 'сдача в аренду': 3000 },
  addIncome: [],
  expences: {},// расходы за месяц
  addExpenses: ['Kоммуналка, Бензин, Кредит'],
  deposit: false,
  mission: 150000,// цель
  period: 8,
  budget: money, // доход за месяц
  budgetMonth: 0,// Бюджет на месяц
  budgetDay: 0, // бюджет на месяц
  expensesMonth: 0, // расходы за месяц

  asking: function () {
    let addExpenses = (prompt
      ('Перечислите возможные расходы за рассчитываемый период (через запятую) ?', 'Квартплата, Кредит, Бензин'));
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    // ввод расходов за месяц
    let name, s;
    for (i = 0; i < 2; i++) {
      // Статьи расходов
      do {
        name = prompt('Введите обязательную статью расходов № ' + (i + 1));
        s = prompt('Во сколько это обойдется?');
        appData.expences[name] = s;
        console.log(appData.expences);
      } while (!isNumber(s));
    }



  },

  // ф-ия расходов за месяц
  getExpensesMonth: function () {
    for (let key in appData.expences) {
      appData.expensesMonth += +appData.expences[key];
    }

  },

  // ф-ия месячный бюджет
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },

  // ф-ия достижение цели
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.budgetMonth);
  }

};

console.log(typeof money);
console.log(typeof appData.income);
console.log(typeof appData.deposit);

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

// Депозит в банке
if (appData.deposit) {
  console.log('Есть вклад в банке');
} else {
  console.log('Вклада в банке нет');
}

console.log('Расходы за месяц : ' + appData.expensesMonth);

//  Вывод бюджета на месяц
console.log('Бюджет на месяц : ' + appData.budgetMonth);

// Расчет достижения цели
console.log('Моя цель - накопить ' + appData.mission);

if (appData.getTargetMonth() < 0) {
  console.log('Цель НЕ будет достигнута');
} else {
  console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев');
}

// ф-ия статуса дохода

console.log('Бюджет на день ' + appData.budgetDay);
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

// // Бюджет на день
// budgetDay = Math.floor(accumulatedMonth / 30);


// // Уровень дохода
getStatusIncome(appData.budgetDay);



