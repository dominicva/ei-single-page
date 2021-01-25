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
} from './js/projectsGrid';

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
gridItemContainer.addEventListener('mouseenter', () => {
  if (window.innerWidth >= 1024) {
    // BORDER
    gridItem.style.borderColor = '#ffb300';

    // IMAGE
    projectImage.style.opacity = '0';

    // SET PRE-ANIMATION STYLE PROPERTY VALUES
    projectContentHeadline.style.display = 'block';
    projectContentHeadline.style.position = 'absolute';
    projectContentHeadline.style.top = '70%';
    projectContentHeadline.style.paddingLeft = '24px';

    projectContentBody.style.display = 'block';
    projectContentBody.style.position = 'absolute';
    projectContentBody.style.bottom = '0%';
    projectContentBody.style.paddingLeft = '24px';

    projectContentCta.style.display = 'flex';
    projectContentCta.style.position = 'absolute';
    projectContentCta.style.bottom = '-100%';
    projectContentCta.style.paddingLeft = '24px';
    projectContentCta.style.paddingRight = '24px';
    projectContentCta.style.width = '100%';

    setTimeout(() => {
      // CONTENT HEADLINE
      projectContentHeadline.style.opacity = '1';
      projectContentHeadline.style.top = '5%';

      // CONTENT TITLE
      projectContentTitle.style.bottom = '60%';

      // CONTENT BODY
      projectContentBody.style.opacity = '1';
      projectContentBody.style.bottom = '42%';

      // CONTENT CTA
      projectContentCta.style.opacity = '1';
      projectContentCta.style.bottom = '5%';
    }, 20);
  }
});

gridItemContainer.addEventListener('mouseleave', () => {
  if (window.innerWidth >= 1024) {
    // BORDER
    gridItem.style.borderColor = '';

    // IMAGE
    projectImage.style.opacity = '1';

    // CONTENT HEADLINE
    projectContentHeadline.style = '';

    // CONTENT TITLE
    projectContentTitle.style.bottom = '0';

    // CONTENT BODY
    projectContentBody.style = '';

    // CONTENT CTA
    projectContentCta.style = '';
  }
});
