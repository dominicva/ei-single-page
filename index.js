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
import { gridItem, projectImage, projectContentTitle } from './js/projectsGrid';

import('./js/header').then(header => {
  header.toggleMenuHandler();
});

// HERO SECTION INTERSECTION OBSERVERS
missionStatementObserver.observe(missionStatementEl);
missionTitleObserver.observe(missionTitleEl);
missionTextObserver.observe(missionTextEl);

// PROJECTS SECTION INTERSECTION OBSERVERS
typeWriterObserver.observe(projectsHeaderTitle);

// **NB to be converted to querySelectorAll when more images added**
projectImageParallaxerObserver.observe(projectImageParallaxer);

// project grid image hover handler
gridItem.addEventListener('mouseenter', () => {
  if (window.innerWidth >= 1024) {
    projectImage.style.opacity = '0';
    projectContentTitle.style.bottom = '50%';
  }
});
gridItem.addEventListener('mouseleave', () => {
  if (window.innerWidth >= 1024) {
    projectImage.style.opacity = '1';
    projectContentTitle.style.bottom = '0%';
  }
});
