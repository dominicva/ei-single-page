export const missionStatementEl = document.querySelector('.mission__statement');
export const missionTitleEl = document.querySelector('.mission__title');
export const missionTextEl = document.querySelector('.mission__text');

const missionStatementOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.5,
};

const missionTitleOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0,
};

const missionTextOptions = {
  root: null,
  rootMargin: '0px 0px 50px 0px',
  threshold: 0,
};

// list of observer options
const options = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.5,
};

// instantiate a new Intersection Observer
export const missionStatementObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.add('slide-in--up');
  });
}, missionStatementOptions);

export const missionTitleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.style.animationDelay = '1s';
    entry.target.classList.add('slide-in--up');
  });
}, missionTitleOptions);

export const missionTextObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animationDelay = '1.5s';
      entry.target.classList.add('slide-in--up');
    }
  });
}, missionTextOptions);
