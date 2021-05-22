import { projectsHeaderTitle, typeWriterObserver } from './js/typeWriter';

import {
  missionStatementEl,
  missionStatementObserver,
  missionTitleEl,
  missionTitleObserver,
  missionTextEl,
  missionTextObserver,
} from './js/heroSlideIns';

import { headerScrollHandler } from './js/headerScroll';

import { headerBtn, toggleMenuHandler, navItems, headerNav } from './js/header';

// HEADER MENU TOGGLE BUTTON FUNCTIONALITY
toggleMenuHandler();

// HEADER SCROLL
window.addEventListener('scroll', headerScrollHandler);

// CLOSE HEADER NAV ON CLICKING NAV ITEM
for (const navItem of navItems) {
  navItem.addEventListener('click', () => {
    headerNav.classList.remove('open');
    headerBtn.textContent = 'Menu';
  });
}

// HERO SECTION INTERSECTION OBSERVERS
missionStatementObserver.observe(missionStatementEl);
missionTitleObserver.observe(missionTitleEl);
missionTextObserver.observe(missionTextEl);

// PROJECTS SECTION INTERSECTION OBSERVERS
typeWriterObserver.observe(projectsHeaderTitle);

const containersArray = Array.from(
  document.querySelectorAll('.grid-item__container')
).slice(1);

function imageCollapseHandler(image) {
  if (image.classList.contains('collapse')) {
    image.classList.remove('collapse');
  } else {
    image.classList.add('collapse');
  }
}

function imageTitleHandler(imageTitle) {
  imageTitle.classList.contains('fade-out')
    ? imageTitle.classList.remove('fade-out')
    : imageTitle.classList.add('fade-out');
}

function hoverBorderHandler(eventTarget) {
  eventTarget.classList.contains('border-in')
    ? eventTarget.classList.remove('border-in')
    : eventTarget.classList.add('border-in');
}

function projectHoverHandler(event) {
  if (window.innerWidth >= 1024) {
    const image = event.currentTarget.querySelector('.grid-item__image');
    const imageTitle = event.currentTarget.querySelector(
      '.grid-item__image__title'
    );
    setTimeout(() => {
      imageCollapseHandler(image);
      imageTitleHandler(imageTitle);
    }, 100);
    hoverBorderHandler(event.currentTarget);
  } else {
    return;
  }
}

for (const container of containersArray) {
  container.addEventListener('mouseenter', projectHoverHandler);
  container.addEventListener('mouseleave', projectHoverHandler);
}
