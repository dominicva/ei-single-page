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
  gridItemContainer,
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

import { toggleMenuHandler, navItems, headerNav } from './js/header';

// HEADER MENU TOGGLE BUTTON FUNCTIONALITY
toggleMenuHandler();

// HEADER SCROLL
window.addEventListener('scroll', headerScrollHandler);

// CLOSE HEADER NAV ON CLICKING NAV ITEM
for (const navItem of navItems) {
  navItem.addEventListener('click', () => {
    headerNav.classList.remove('open');
  });
}

// HERO SECTION INTERSECTION OBSERVERS
missionStatementObserver.observe(missionStatementEl);
missionTitleObserver.observe(missionTitleEl);
missionTextObserver.observe(missionTextEl);

// PROJECTS SECTION INTERSECTION OBSERVERS
typeWriterObserver.observe(projectsHeaderTitle);

// **NB to be converted to querySelectorAll when more images added**
projectImageParallaxerObserver.observe(projectImageParallaxer);

gridItemContainer.addEventListener('mouseenter', projectMouseEnterHandler);
gridItemContainer.addEventListener('mouseleave', projectMouseLeaveHandler);

window.addEventListener('resize', emailInputPlaceholderHandler);
window.addEventListener('load', emailInputPlaceholderHandler);
