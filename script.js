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
  expences: {},
  addExpenses: ['Kоммуналка, Бензин, Кредит'],
  deposit: false,
  mission: 150000,
  period: 8,
  budget: money,
  budgetMonth: 0,
  expensesMonth: 0,
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
      return appData.expensesMonth;
    }
  },

  // ф-ия месячный бюджет
  getAccumulatedMonth: function (data1, data2) {
    return data1 - data2;
  },

  // ф-ия достижение цели
  getTargetMonth: function (param1, param2) {
    return Math.ceil(param1 / param2);
  }

};

console.log(typeof money);
console.log(typeof appData.income);
console.log(typeof appData.deposit);

appData.asking();

appData.getExpensesMonth();

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


// Депозит в банке
if (appData.deposit) {
  console.log('Есть вклад в банке');
} else {
  console.log('Вклада в банке нет');
}

console.log('Расходы за месяц : ' + appData.expensesMonth);

// Расчет бюджета на месяц
let accumulatedMonth = appData.getAccumulatedMonth(money, appData.expensesMonth);

// Расчет достижения цели
console.log('Моя цель - накопить ' + appData.mission);
if (appData.getTargetMonth(appData.mission, accumulatedMonth) < 0) {
  console.log('Цель НЕ будет достигнута');
} else {
  console.log('Цель будет достигнута за ' + appData.getTargetMonth(appData.mission, accumulatedMonth) + ' месяцев');
}

// Бюджет на день
budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день ' + budgetDay);

// Уровень дохода
getStatusIncome(budgetDay);



