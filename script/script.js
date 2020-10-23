"use strict";


// Получение элементов
let
  start = document.getElementById('start'),// кнопка старт
  incomePlus = document.getElementsByTagName('button')[0],// кнопка + доходы
  expensesPlus = document.getElementsByTagName('button')[1],// кнопка + расходы
  depositCheck = document.querySelector('#deposit-check'),// checkbox вклада

  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),// возможные доходы наименование
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),// возможный расходы наименование

  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],//бюджет на месяц
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],//бюджет на день
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],//расходы за месяц
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],//возможные доходы
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],//возможные расходы вывод
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0],// накопления за period
  targetMonthValue = document.getElementsByClassName('target_month-value')[0],// срок достижения цели


  salaryAmount = document.querySelector('.salary-amount'),// месячный доход
  incomeTitle = document.querySelector('.income-title'),// дополнит доход наименование
  // incomeAmount = document.querySelector('.income-amount'),// дополнит доход сумма
  expensesTitle = document.querySelector('.expenses-title'),// дополнит расход наименование
  // expensesAmount = document.querySelector('.expenses-amount'),// дополнит расход сумма
  expensesItems = document.querySelectorAll('.expenses-items'),
  depositAmount = document.querySelector('.deposit-amount'),// сумма вклада
  depositPercent = document.querySelector('.deposit-percent'),// процент по вкладу
  targetAmounte = document.querySelector('.target-amount'),// цель
  periodSelect = document.querySelector('.period-select'),//  период
  periodAmount = document.querySelector('.period-amount'),//число в периоде
  incomeItems = document.querySelectorAll('.income-items');// дополнительные доходы

// ф-ия проверки ввода числа
let isNumber = function (n) {
  // переводит строку в число и проверяет на NaN и infinity
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let appData = {
  income: {},
  addIncome: [],
  expenses: {},// расходы за месяц
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0, // доход за месяц
  budgetMonth: 0,// Бюджет на месяц
  budgetDay: 0, // бюджет на день
  expensesMonth: 0, // расходы за месяц
  incomeMonth: 0, // доходы за месяц

  // ф-ия старта
  start: function () {
    if (salaryAmount.value === '') {
      alert('Ошибка! Поле "месячный доход" должно быть заполнено');
      return;
    }
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    // appData.getInfoDeposit();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();

  },

  // добавнение полей расхода
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    console.log(cloneExpensesItem);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';// скрываем кнопку +
    }
  },

  // получение расходов
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },

  // добавнение полей дохода
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';// скрываем кнопку +
    }
  },

  // получение доходов
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncomes = item.querySelector('.income-title').value;
      let cashIncomes = item.querySelector('.income-amount').value;
      if (itemIncomes !== '' && cashIncomes !== '') {
        appData.income[itemIncomes] = cashIncomes;
      }
    });
    // for (let key in appData.income) {
    //   appData.incomeMonth += +appData.income[key];
    // }

  },

  // вывод возможных расходов
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },

  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },

  // вывод результата
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.round(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth();
    incomePeriodValue.value = appData.calcSaveMoney();
  },


  // ф-ия вклада в банке

  getInfoDeposit: function () {
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

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
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }

  },

  // ф-ия месячный бюджет
  getBudget: function () {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },

  // ф-ия достижение цели
  getTargetMonth: function () {
    return Math.ceil(targetAmounte.value / appData.budgetMonth);
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
    console.log(periodSelect.value);
    incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
    console.log(incomePeriodValue.value);
    periodAmount.textContent = periodSelect.value;


    return incomePeriodValue.value;
  }

};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.calcSaveMoney);


// вОПРОСЫ
// зачем при получении budgetMonthValue и др. ставится индекс[0],ведь он и так один, но без него не работает.
