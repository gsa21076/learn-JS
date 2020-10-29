"use strict";


// Получение элементов
const
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
  depositAmount = document.querySelector('.deposit-amount'),// сумма вклада
  depositPercent = document.querySelector('.deposit-percent'),// процент по вкладу
  targetAmounte = document.querySelector('.target-amount'),// цель
  periodSelect = document.querySelector('.period-select'),//  период
  periodAmount = document.querySelector('.period-amount'),//число в периоде
  inputsType = document.querySelectorAll(' input[type=text]');

let incomeItems = document.querySelectorAll('.income-items'),// дополнительные доходы
  expensesItems = document.querySelectorAll('.expenses-items');


// ф-ия проверки ввода числа
const isNumber = (n) => {
  // переводит строку в число и проверяет на NaN и infinity
  return !isNaN(parseFloat(n)) && isFinite(n);
};

class AppData {
  constructor() {
    this.income = {};
    this.addIncome = [];
    this.expenses = {};// расходы за месяц
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0; // доход за месяц
    this.budgetMonth = 0;// Бюджет на месяц
    this.budgetDay = 0; // бюджет на день
    this.expensesMonth = 0; // расходы за месяц
    this.incomeMonth = 0; // доходы за месяц
  }

  // ф-ия старта
  start() {
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
  }

  // ф-ия cansel
  reset() {
    this.budget = 0;
    this.addIncome = [];
    this.addExpenses = [];
    this.incomeMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.expenses = {};
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetMonth = 0;
    this.budgetDay = 0;
    startBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
    periodSelect.value = 1;
    periodAmount.textContent = 1;
    const inputsType = document.querySelectorAll(' input[type=text]');
    inputsType.forEach((item) => {
      item.removeAttribute('disabled');
      item.value = '';
    });
  }

  // добавнение полей расхода
  addExpensesBlock() {
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems[expensesItems.length - 1].querySelector('.expenses-title').value = '';// очистка содержимого
    expensesItems[expensesItems.length - 1].querySelector('.expenses-amount').value = '';// очистка содержимого
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';// скрываем кнопку +
    }
  }

  // получение расходов
  getExpenses() {
    let cashExpenses = '';
    this.expensesMonth = 0;
    expensesItems.forEach((item) => {
      const itemExpenses = item.querySelector('.expenses-title').value;
      cashExpenses = item.querySelector('.expenses-amount').value;
      if (isNumber(cashExpenses)) {
        this.expenses[itemExpenses] = +cashExpenses;
        this.expensesMonth += this.expenses[itemExpenses];
      } else {
        cashExpenses = 0;
      }
    });
  }

  // добавнение полей дохода
  addIncomeBlock() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    incomeItems[incomeItems.length - 1].querySelector('.income-title').value = '';// очистка содержимого
    incomeItems[incomeItems.length - 1].querySelector('.income-amount').value = '';// очистка содержимого
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';// скрываем кнопку +
    }
  }

  // получение доходов
  getIncome() {
    let cashIncomes = 0;
    this.incomeMonth = 0;
    incomeItems.forEach((item) => {
      const itemIncomes = item.querySelector('.income-title').value;
      cashIncomes = item.querySelector('.income-amount').value;
      if (isNumber(cashIncomes)) {
        this.income[itemIncomes] = +cashIncomes;
        this.incomeMonth += this.income[itemIncomes];
      } else {
        cashIncomes = 0;
      }
    });
  }

  getAddExpenses() {
    this.addExpenses = [];
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  }

  // вывод возможных доходов
  getAddIncome() {
    this.addIncome = [];
    additionalIncomeItem.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  }

  // блокировка unput
  inputBlock() {
    const inputsType = document.querySelectorAll(' input[type=text]');
    inputsType.forEach((item) => {
      item.setAttribute('disabled', '');
    });
  }

  // ф-ия месячный бюджет
  getBudget() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  }

  // ф-ия достижение цели
  getTargetMonth() {
    return Math.ceil(targetAmounte.value / this.budgetMonth);
  }

  // ф-ия подсчета накоплений за period
  calcSaveMoney() {
    this.budgetMonth = budgetMonthValue.value;
    incomePeriodValue.value = this.budgetMonth * periodSelect.value;
    periodAmount.textContent = periodSelect.value;
    return incomePeriodValue.value;
  }

  // вывод результата
  showResult() {
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
  }

  // Слушатели событий
  eventListeners() {
    startBtn.addEventListener('click', function () {
      if (salaryAmount.value === '') {
        alert('Ошибка! Поле "месячный доход" должно быть заполнено');
      }
    });
    startBtn.addEventListener('click', this.start.bind(this));

    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('input', this.calcSaveMoney);
    cancelBtn.addEventListener('click', this.reset.bind(this));
  }
}


const appData = new AppData();
appData.eventListeners();


