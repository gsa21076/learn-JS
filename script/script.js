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

  countTimer('6 november 2020');


  // menu
  const toggleMenu = () => {

    const menu = document.querySelector('menu'),
      body = document.querySelector('body');

    const openMenu = (event) => {
      console.log(event);
      let width = document.documentElement.clientWidth,
        count = 0;
      menu.style.left = count + 'px';
      const goLeft = () => {
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

    const getMenu = (event) => {
      let target = event.target;

      if (target.closest('.menu')) {
        openMenu();
      }

      if (target.classList.contains('close-btn') ||
        target.closest('li') ||
        target.closest('main')) {
        closeMenu();
      }
    };
    body.addEventListener('click', getMenu);


  }
  toggleMenu();


  // popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });

    popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        console.log(target);
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });


  };
  togglePopup();

  // tabs
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();
});
