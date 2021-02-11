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

import {
  gridItemContainers,
  gridItem,
  projectImage,
  projectContentTitle,
  projectContentHeadline,
  projectContentBody,
  projectContentCta,
  projectMouseEnterHandler,
  projectMouseLeaveHandler,
} from './js/projectsGrid';

// import { emailInputPlaceholderHandler } from './js/footer';

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

console.log(gridItemContainers);
for (const item of gridItemContainers) {
  item.addEventListener('mouseenter', projectMouseEnterHandler);
  item.addEventListener('mouseleave', projectMouseLeaveHandler);
}
//   gridItemContainer.addEventListener('mouseenter', projectMouseEnterHandler);
// gridItemContainer.addEventListener('mouseleave', projectMouseLeaveHandler);

// window.addEventListener('resize', emailInputPlaceholderHandler);
// window.addEventListener('load', emailInputPlaceholderHandler);
