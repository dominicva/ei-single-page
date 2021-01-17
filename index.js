import { projectsHeader, typeWriterObserver } from './js/typeWriter';
import {
  missionStatementEl,
  missionStatementObserver,
  missionTitleEl,
  missionTitleObserver,
  missionTextEl,
  missionTextObserver,
} from './js/slideIns';

import('./js/header').then(header => {
  header.toggleMenuHandler();
});

typeWriterObserver.observe(projectsHeader);

missionStatementObserver.observe(missionStatementEl);
missionTitleObserver.observe(missionTitleEl);
missionTextObserver.observe(missionTextEl);

console.log('hello, world!');
