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
