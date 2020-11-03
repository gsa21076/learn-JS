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
        dateWeek = new Date().getDay(),
        dateToday = new Date(),
        timeRemaining = (dateStop - dateNow) / 1000,
        days = addZero(Math.floor(timeRemaining / 60 / 60 / 24));
      console.log(days);
      return { days, dateHours, dateWeek, dateToday };
    }

    const getHello = (hours) => {
      console.log(hours);
      if (hours.hours >= 0 && hours.hours < 6) {
        hello.textContent = 'Доброй ночи';
      }
      if (hours.hours >= 6 && hours.hours < 12) {
        hello.textContent = 'Доброе уторо';
      }
      if (hours.hours >= 12 && hours.hours < 18) {
        hello.textContent = 'Добрый день';
      }
      if (hours.hours >= 18 && hours.hours < 24) {
        hello.textContent = 'Добрый вечер';
      }
    };


    const dayWeek = (weekDay) => {
      const week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
      today.textContent = `Сегодня : ${week[weekDay]}`;
      // return week[weekDay];

    };

    const hours = (dateToday) => {
      timeNow.textContent = `Текущее время : ${dateToday.toLocalTimeString('en')}`;
    }

    function updateClock() {
      let time = getTimeRemaining();
      console.log(time.days);
      let gethello = getHello(time.dateHours);
      let getDayWeek = dayWeek(time.dateWeek);
      let getHours = hours(time.dateToday);
    }
    let idInterval = setInterval(updateClock, 1000);
  }

  countTimer('2021');
});


