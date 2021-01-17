import { projectsHeader, observer } from './js/typeWriter';

import('./js/header').then(header => {
  header.toggleMenuHandler();
});

observer.observe(projectsHeader);

console.log('hello, world!');
