'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let data = document.getElementById('timeBlock');

let data2 = document.getElementById('timeBlockShort');
let endHours = '';
let date = new Date();
let day = date.getDate();
let year = date.getFullYear();
let month = date.toLocaleString('ru', { month: 'long' });
let dayweek = week[date.getDay() - 1];
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// ф-ия окончания слова час
let endWords = function (hours) {
  // окончание слова час и секунда
  if (hours >= 2 && hours <= 4 || hours >= 22 && hours <= 24) {
    endHours = 'а';
  } else {
    if (hours === 1 || hours === 21) {
      endHours = '';
    } else {
      endHours = 'ов';
    }
  }
};
//  вывод формата №1
let time = function () {

  month = month.substring(0, month.length - 1) + 'я';
  endWords(hours, minutes, seconds);
  return 'Сегодня ' + dayweek + ", " + day + ' ' + month + " " + year + " года, " + hours + " час" + endHours + ' ' + minutes + " минут " + seconds + ' секунд';

};
setInterval(() => data.innerHTML = time(), 1000);



//добавление 0 перед числом
let zero = function (item) {
  if (item < 10) {
    item = '0' + item;
  }
  return item
};


//вывод № 2
let time2 = function () {

  return day + '.' + month + '.' + year + ' - ' + hours + ':' + minutes + ':' + seconds;
};
setInterval(() => data2.innerHTML = time2(), 1000);

