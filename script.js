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
};

let appData = {
  income: {},
  addIncome: [],
  expences: {},// расходы за месяц
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 150000,// цель
  period: 3,
  budget: money, // доход за месяц
  budgetMonth: 0,// Бюджет на месяц
  budgetDay: 0, // бюджет на месяц
  expensesMonth: 0, // расходы за месяц

  asking: function () {
    let itemIncome, cashIncome;
    if (confirm('Есть ли у вас дополнительный заработок?')) {
      do {
        itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Сдача в аренду');
        // console.log(typeof itemIncome, itemIncome);
      } while (isNumber(itemIncome));
      // console.log(isNumber(itemIncome));

      do {
        cashIncome = prompt('Какую сумму приносит дополнительны доход', 10000);
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses = (prompt
      ('Перечислите возможные расходы за рассчитываемый период (через запятую) ?', 'Квартплата, Кредит, Бензин'));
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    // console.log(appData.addExpenses, typeof appData.addExpenses);
    // ввод расходов за месяц
    let name, s;
    for (i = 0; i < 2; i++) {
      // Статьи расходов
      do {
        name = prompt('Введите обязательную статью расходов № ' + (i + 1));
      } while (isNumber(name));
      do {
        s = prompt('Во сколько это обойдется?');
      } while (!isNumber(s));
      appData.expences[name] = s;
    }
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },

  // ф-ия вклада в банке
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент', 10);
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма вклада', 10000);
      } while (!isNumber(appData.moneyDeposit));
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
  },

  // ф-ия статуса дохода
  getStatusIncome: function () {
    if (appData.budgetDay > 1200) {
      console.log('У вас высокий уровень дохода');
    } else
      if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
        console.log('У вас средний уровень дохода');
      } else
        if (appData.budgetDay > 0 && appData.budgetDay <= 600) {
          console.log('К сожалению у вас уровень дохода ниже среднего');
        } else {
          console.log('Вы тратите больше,чем зарабатываете!');
        }
  },



  // ф-ия подсчета накоплений за period
  calcSaveMoney: function () {
    return appData.budgetMonth * appData.period;
  }

};

console.log(typeof money);
console.log(typeof appData.income);
console.log(typeof appData.deposit);

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

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

console.log('Бюджет на день ' + appData.budgetDay);
appData.getStatusIncome();

console.log('За ' + appData.period + ' месяца накопится ' + appData.calcSaveMoney());

// перевод массива в строку 
appData.addExpenses.forEach(function (item, i, addExpenses) {
  item = (item.charAt(0).toUpperCase() + item.substr(1));
  appData.addExpenses[i] = item;
});
console.log(appData.addExpenses.join(', '));




