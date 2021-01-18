/*
HERO SECTION INTERSECTION OBSERVERS
*/
export const missionStatementEl = document.querySelector('.mission__statement');
export const missionTitleEl = document.querySelector('.mission__title');
export const missionTextEl = document.querySelector('.mission__text');

const missionStatementOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const missionTitleOptions = {
  rootMargin: '0px 0px 100px 0px',
};

const missionTextOptions = missionStatementOptions;

// instantiate a Intersection Observers
export const missionStatementObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.add('slide-in--up');
  });
}, missionStatementOptions);

export const missionTitleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.2s';
      entry.target.classList.add('slide-in--up');
    }
  });
}, missionTitleOptions);

export const missionTextObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.3s';
      entry.target.classList.add('slide-in--up');
    }
  });
}, missionTextOptions);
