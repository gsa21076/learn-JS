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

export default toggleMenu;