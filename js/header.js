export const navItems = document.querySelectorAll('.header__li');
export const headerNav = document.querySelector('.header__nav');

export const toggleMenuHandler = () => {
  const headerBtn = document.querySelector('.header__button');

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
