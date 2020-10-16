// 'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let date = new Date(); // создание обекта date
date = date.getDay(); // получение  номера дня недели

for (let i = 0; i < week.length; i++) {  // перебор массива
  if (i === date - 1) { // текущий день недели (-1- массив с 0)
    if (i > 4) {        //если выходной и текущий
      document.write(week[i].bold().italics() + '<br>');
    } else {
      document.write(week[i].bold() + '<br>');// вывод текущего дня недели жирным
    }
  }
  else {
    document.write(week[i] + ('<br>')); // остальные просто вывод
  }
}