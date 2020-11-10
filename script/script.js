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
      menu = document.querySelector('menu');

    const openMenu = () => {
      let menuRectWidth = menu.getBoundingClientRect().width,
        width = document.documentElement.clientWidth,
        count = 0;
      menu.style.left = count + 'px';
      let goLeft = () => {
        count += 40;
        if (width > 768) {
          if (count < width) {
            menu.style.left = count + 'px';
            requestAnimationFrame(goLeft);
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
      if (target.classList.contains('close-btn') ||
        target.closest('li')) {
        closeMenu();
      }

    };
    btnMenu.addEventListener('click', openMenu);
    menu.addEventListener('click', getMenu);
  };
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


  // slider
  const slider = () => {
    const slider = document.querySelector('.portfolio-content'),
      slide = document.querySelectorAll('.portfolio-item'),
      portfolioDots = document.querySelector('.portfolio-dots');

    slide.forEach((i) => {
      const dot = document.createElement('li');
      portfolioDots.append(dot);
      dot.classList.add('dot');
    });
    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);

    };
    const nextSlide = () => {
      slide[currentSlide].classList.add('portfolio-item-active');
      dot[currentSlide].classList.add('dot-active');
    };
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    };
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (target === elem) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });
    startSlide(2000);

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
        stopSlide();
      }
    });
    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
        startSlide();
      }
    });
  };
  slider();

  //calculator
  const calc = (price = 100) => {

    const
      calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcDay = document.querySelector('.calc-day'),
      calcSquare = document.querySelector('.calc-square'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');
    let total = 0,
      i = 0;

    const countSum = () => {
      let
        dayValue = 1,
        countValue = 1;

      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;
      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }
      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }


      function updateTotal() {

        totalValue.textContent = i;
        i += 50;
        if (i > total) {
          totalValue.textContent = total;
          clearInterval(totalPrice);
        }
      }
      let totalPrice = setInterval(updateTotal, 1);
    };

    calcBlock.addEventListener('change', (event) => {
      event.target.value = event.target.value.replace(/[^\d\.]/g, '');
      i = 0;
      const target = event.target;
      if (target === calcType || target === calcDay ||
        target === calcCount || target === calcSquare) {
        countSum();
      }
    });

  };

  calc(100);


  // command
  const command = () => {
    const img = document.querySelectorAll('.command__photo');
    let imgTarget;
    img.forEach((elem) => {
      elem.addEventListener('mouseover', (event) => {
        imgTarget = event.target.src;
        event.target.src = event.target.dataset.img;
      });
      elem.addEventListener('mouseout', (event) => {
        event.target.src = imgTarget;
      });
    });


  };

  command();
});


