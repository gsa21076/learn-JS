window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  //Timer
  function countTimer(deadLine) {
    const hello = document.querySelector('.hello'),
      today = document.querySelector('.today'),
      timeNow = document.querySelector('.time-now'),
      newYear = document.querySelector('.new-year');

    const addZero = (n) => n < 10 ? '0' + n : n;

    function getTimeRemaining() {
      let dateStop = new Date(deadLine).getTime(),
        dateNow = new Date().getTime(),
        dateHours = new Date().getHours(),
        dateMinuts = new Date().getMinutes(),
        dateSeconds = new Date().getSeconds(),
        dateWeek = new Date().getDay(),
        dateToday = new Date(),
        timeRemaining = (dateStop - dateNow) / 1000,
        days = addZero(Math.floor(timeRemaining / 60 / 60 / 24));
      console.log(days, dateHours, dateMinuts, dateSeconds, dateWeek, dateToday);
      return { days, dateHours, dateMinuts, dateSeconds, dateWeek, dateToday };
    }


    const getHello = (time) => {
      console.log(time);
      if (time >= 0 && time < 6) {
        hello.textContent = 'Доброй ночи';
      }
      if (time >= 6 && time < 12) {
        hello.textContent = 'Доброе уторо';
      }
      if (time >= 12 && time < 18) {
        hello.textContent = 'Добрый день';
      }
      if (time >= 18 && time < 24) {
        hello.textContent = 'Добрый вечер';
      }
    };

    const getDayWeek = (weekDay) => {
      console.log(weekDay);
      const week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
      today.textContent = `Сегодня : ${week[weekDay]}`;
    };

    const getToday = (dateToday) => {
      console.log(dateToday);
      timeNow.textContent = `Текущее время : ${dateToday.toLocaleTimeString('en')}`;
    };

    const getNewYear = (year) => {
      console.log(year);
      newYear.textContent = `До нового года осталось : ${year} дней`;
    };

    function updateClock() {
      let timer = getTimeRemaining();
      getHello(timer.dateHours)
      getDayWeek(timer.dateWeek);
      getToday(timer.dateToday);
      getNewYear(timer.days);
    }

    let idInterval = setInterval(updateClock, 1000);


  }
  countTimer('2021');

});

