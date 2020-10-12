"use strict";


let lang = '';
lang = prompt('Введите язык ("ru" или "en")');

//  применение if
if (lang == 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');

} else
  if (lang == 'en') {
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');

  } else {
    console.log('Что-то пошло не так');
  }

switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');
    break;

  case 'en':
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
    break;

  default:
    console.log('Что-то пошло не так');
}

// Объект Map(ассоциативный массив)
const day = new Map([
  ['ru', 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение'],
  ['en', 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday']
]);

console.log(day.get(lang));

// Тернарный оператор
let namePerson = prompt('Введите имя');

let result = namePerson == 'Артем' ?
  console.log('Директор') :
  namePerson == 'Максим' ?
    console.log('Преподаватель') :
    console.log('Студент');

