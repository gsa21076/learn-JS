
// Получение элементов
const btnStart = document.getElementById('start'),// кнопка старт
  btnPlusIncome = document.getElementsByTagName('button')[0],// кнопка + доходы
  btnPlusExpenses = document.getElementsByTagName('button')[1],// кнопка + расхлды
  depositCheck = document.querySelector('#deposit-check'),// checkbox вклада

  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),// возможные доходы наименование
  additionalExpensesItem = document.querySelectorAll('.additional_expenses-item'),// возможный расхлды наименование

  budgetMonthValue = document.getElementsByClassName('budget_month-value'),//бюджет на месяц
  budgetDayValue = document.getElementsByClassName('budget_day-value'),//бюджет на день
  expensesMonthValue = document.getElementsByClassName('expenses_month-value'),//расходы за месяц
  additionalIncomeValue = document.getElementsByClassName('additional_income-value'),//возможные доходы
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),//возможные расходы
  incomePeriodValue = document.getElementsByClassName('income_period-value'),// накопления за period
  targetMonthValue = document.getElementsByClassName('target_month-value'),// срок достижения цели

  salaryAmount = document.querySelector('.salary-amount'),// месячный доход
  incomeTitle = document.querySelector('.income-title'),// дополнит доход наименование
  incomeAmount = document.querySelector('.income-amount'),// дополнит доход сумма
  expensesTitle = document.querySelector('.expenses-title'),// дополнит расход наименование
  expensesAmount = document.querySelector('.expenses-amount'),// дополнит расход сумма
  depositAmount = document.querySelector('.deposit-amount'),// сумма вклада
  depositPercent = document.querySelector('.deposit-percent'),// процент по вкладу
  targetAmounte = document.querySelector('.target-amount'),// цель
  periodSelect = document.querySelector('.period-select');//  период
