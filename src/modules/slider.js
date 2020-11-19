const slider = () => {
  const slider = document.querySelector('.portfolio-content'),
    slide = document.querySelectorAll('.portfolio-item'),
    portfolioDots = document.querySelector('.portfolio-dots');

  slide.forEach((i) => {
    const dot = document.createElement('li');
    portfolioDots.appendChild(dot);
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

export default slider;