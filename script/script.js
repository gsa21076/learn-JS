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


  // menu
  const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const openMenu = () => {
      let menuRectWidth = menu.getBoundingClientRect().width,
        width = document.documentElement.clientWidth,
        count = 0;
      menu.style.left = count + 'px';
      let goLeft = () => {
        count += 10;
        if (width > 768) {
          if (count < width) {
            menu.style.left = count + 'px';
            setTimeout(goLeft, 1);
          }
        } else {
          menu.style.transform = 'translate(0)';
        }
      };
      goLeft();
    };
    const closeMenu = () => {
      menu.style.left = '0px';
      menu.style.transform = 'translate(-100%)';
    };

    btnMenu.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    menuItems.forEach(elem => elem.addEventListener('click', closeMenu));
  };
  toggleMenu();


  // popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close');

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        console.log(popup);
        popup.style.display = 'block';
      });
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  };
  togglePopup();

});
