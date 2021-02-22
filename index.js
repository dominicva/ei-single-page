import { projectsHeaderTitle, typeWriterObserver } from './js/typeWriter';

import {
  missionStatementEl,
  missionStatementObserver,
  missionTitleEl,
  missionTitleObserver,
  missionTextEl,
  missionTextObserver,
} from './js/heroSlideIns';

import {
  projectImageParallaxer,
  projectImageParallaxerObserver,
} from './js/projectsSlideIns';

// import { containers, imageCollapseHandler } from './js/projectHover';

import { lastScroll, headerScrollHandler } from './js/headerScroll';

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

for (const image of projectImageParallaxer) {
  projectImageParallaxerObserver.observe(image);
}

const containersArray = Array.from(
  document.querySelectorAll('.grid-item__container')
).slice(1);

function imageCollapseHandler(image) {
  image.classList.contains('collapse')
    ? image.classList.remove('collapse')
    : image.classList.add('collapse');
}

function imageTitleHandler(imageTitle) {
  imageTitle.classList.contains('fade-out')
    ? imageTitle.classList.remove('fade-out')
    : imageTitle.classList.add('fade-out');
}

function projectHoverHandler() {
  const image = event.currentTarget.querySelector('.grid-item__image');
  const imageTitle = event.currentTarget.querySelector(
    '.grid-item__image__title'
  );
  imageCollapseHandler(image);
  imageTitleHandler(imageTitle);
}

for (const container of containersArray) {
  container.addEventListener('mouseenter', projectHoverHandler);
  container.addEventListener('mouseleave', projectHoverHandler);
}
