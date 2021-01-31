export const toggleMenuHandler = () => {
  const headerBtn = document.querySelector('.header__button');
  const headerNav = document.querySelector('.header__nav');

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
