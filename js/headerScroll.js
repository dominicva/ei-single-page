export const headerNav = document.querySelector('.header__nav');

export let lastScroll = 0;

export const headerScrollHandler = () => {
  const headerContainerEl = document.querySelector('.header__container');
  let currentScroll = document.documentElement.scrollTop;

  if (headerNav.classList.contains('open')) {
    return;
  }

  if (currentScroll > 0 && lastScroll <= currentScroll) {
    lastScroll = currentScroll;
    headerContainerEl.style.transform = 'translateY(-100%)';
  } else if (lastScroll > currentScroll) {
    lastScroll = currentScroll;
    headerContainerEl.style.transform = 'translateY(0%)';
  }
};
