
let money = 67000;
const income = 'сдача в аренду';
let addExpenses = 'Kоммуналка, Музыкальная Школа, Кредит';
let deposit = true;
const mission = 150000;
const period = 8;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месцев');
console.log('Цель: заработать ' + mission + ' рублей');
console.log((addExpenses.toLowerCase()).split(', '));

let budgetDay = money / 30;
console.log(budgetDay);