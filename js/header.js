export const navItems = document.querySelectorAll('.header__li');
export const headerNav = document.querySelector('.header__nav');
export const headerBtn = document.querySelector('.header__button');

export const toggleMenuHandler = () => {
  headerBtn.addEventListener('click', () => {
    if (headerNav.classList.contains('open')) {
      headerNav.classList.remove('open');
      headerBtn.textContent = 'Menu';
    } else {
      headerNav.classList.add('open');
      headerBtn.textContent = 'Close';
    }
  });
};
