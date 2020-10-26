"use strict";


// Получение элементов
let
  startBtn = document.getElementById('start'),// кнопка старт
  cancelBtn = document.getElementById('cancel'),// кнопка сброс

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
  incomeItems = document.querySelectorAll('.income-items'),// дополнительные доходы
  inputsType = document.querySelectorAll(' input[type=text]');

// console.log(inputsType);

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
    this.budget = +salaryAmount.value;
    console.log(this.budget);

    this.getExpenses();
    this.getIncome();
    this.getAddExpenses();
    this.getAddIncome();
    this.getExpensesMonth();
    this.getBudget();
    this.showResult();
    // this.blockInput();  //вызов ф-ии блокировки input
  },

  // ф-ия cansel
  reset: function () {
    let inputsType = document.querySelectorAll(' input[type=text]');

    inputsType.forEach(function (item) {
      item.removeAttribute('disabled');
      item.value = '';
      startBtn.style.display = 'block';
      cancelBtn.style.display = 'none';


    });
  },

  // добавнение полей расхода
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems[expensesItems.length - 1].querySelector('.expenses-title').value = '';// очистка содержимого
    expensesItems[expensesItems.length - 1].querySelector('.expenses-amount').value = '';// очистка содержимого
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';// скрываем кнопку +
    }
  },

  // получение расходов
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (isNumber(cashExpenses)) {
        console.log(cashExpenses + 'число');
        appData.expenses[itemExpenses] = +cashExpenses;
        appData.expensesMonth += appData.expenses[itemExpenses];
      } else {
        console.log('не число');
        cashExpenses = 0;
      }
    });
  },

  // добавнение полей дохода
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    incomeItems[incomeItems.length - 1].querySelector('.income-title').value = '';// очистка содержимого
    incomeItems[incomeItems.length - 1].querySelector('.income-amount').value = '';// очистка содержимого
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';// скрываем кнопку +
    }
  },

  // получение доходов
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncomes = item.querySelector('.income-title').value;
      let cashIncomes = item.querySelector('.income-amount').value;
      if (isNumber(cashIncomes)) {
        console.log(cashIncomes + 'число');
        appData.income[itemIncomes] = +cashIncomes;
        appData.incomeMonth += appData.income[itemIncomes];
        console.log(appData.income);
      } else {
        console.log('не число');
        cashIncomes = 0;
      }
    });
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


  // блокировка unput
  inputBlock: function () {
    let inputsType = document.querySelectorAll(' input[type=text]');
    inputsType.forEach(function (item) {
      console.log(item);
      item.setAttribute('disabled', '');
    });
  },


  // вывод результата
  showResult: function () {
    console.log(this.budgetMonth);

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.round(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSaveMoney();
    startBtn.style.display = 'none';
    cancelBtn.style.display = 'block';

    this.inputBlock();
  },




  // // ф-ия вклада в банке

  // getInfoDeposit: function () {
  //   appData.deposit = confirm('Есть ли у вас депозит в банке?');

  //   if (appData.deposit) {
  //     do {
  //       appData.percentDeposit = prompt('Какой годовой процент', 10);
  //     } while (!isNumber(appData.percentDeposit));
  //     do {
  //       appData.moneyDeposit = prompt('Какая сумма вклада', 10000);
  //     } while (!isNumber(appData.moneyDeposit));
  //   }
  // },

  // ф-ия расходов за месяц

  getExpensesMonth: function () {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }

  },

  // ф-ия месячный бюджет
  getBudget: function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  },

  // ф-ия достижение цели
  getTargetMonth: function () {
    return Math.ceil(targetAmounte.value / this.budgetMonth);
  },

  // // ф-ия статуса дохода
  // getStatusIncome: function () {
  //   if (appData.budgetDay > 1200) {
  //     console.log('У вас высокий уровень дохода');
  //   } else
  //     if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
  //       console.log('У вас средний уровень дохода');
  //     } else
  //       if (appData.budgetDay > 0 && appData.budgetDay <= 600) {
  //         console.log('К сожалению у вас уровень дохода ниже среднего');
  //       } else {
  //         console.log('Вы тратите больше,чем зарабатываете!');
  //       }
  // },



  // ф-ия подсчета накоплений за period
  calcSaveMoney: function () {
    incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
    periodAmount.textContent = periodSelect.value;
    return incomePeriodValue.value;
  }

};
startBtn.addEventListener('click', function () {
  if (salaryAmount.value === '') {
    alert('Ошибка! Поле "месячный доход" должно быть заполнено');
  } else {
    appData.start();
  }
});

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.calcSaveMoney);
cancelBtn.addEventListener('click', appData.reset);


// вОПРОСЫ
// зачем при получении budgetMonthValue и др. ставится индекс[0],ведь он и так один, но без него не работает.

// выполнен пункт 1 доп задания 

// const items = document.querySelectorAll('input[placeholder="Наименование"], input[placeholder="название"]');
// console.log(items);
// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener('input', e => {
// if(items[i] )
//     // replace
//   });
// }