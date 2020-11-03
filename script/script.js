window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  //Timer
  function countTimer(deadLine) {
    const timerHours = document.querySelector('#timer-hours'),
      timerMinuts = document.querySelector('#timer-minutes'),
      timerSecond = document.querySelector('#timer-seconds');

    const addZero = (n) => n < 10 ? '0' + n : n;

    function getTimeRemaining() {
      let dateStop = new Date(deadLine).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = addZero(Math.floor(timeRemaining % 60)),
        minutes = addZero(Math.floor((timeRemaining / 60) % 60)),
        hours = addZero(Math.floor(timeRemaining / 60 / 60));

      return { timeRemaining, hours, minutes, seconds };
    }



    function updateClock() {
      let timer = getTimeRemaining();
      timerHours.textContent = timer.hours;
      timerMinuts.textContent = timer.minutes;
      timerSecond.textContent = timer.seconds;

      if (timer.timeRemaining < 0) {
        timerHours.textContent = '00';
        timerMinuts.textContent = '00';
        timerSecond.textContent = '00';
        clearInterval(idInterval);
      }
    }
    let idInterval = setInterval(updateClock, 1000);

  }

  countTimer('4 november 2020');
});


