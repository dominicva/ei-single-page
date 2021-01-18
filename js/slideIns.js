export const missionStatementEl = document.querySelector('.mission__statement');
export const missionTitleEl = document.querySelector('.mission__title');
export const missionTextEl = document.querySelector('.mission__text');

const missionStatementOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const missionTitleOptions = {
  root: null,
  rootMargin: '0px 0px 100px 0px',
  threshold: 0,
};

const missionTextOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

// instantiate a new Intersection Observer
export const missionStatementObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);

    entry.target.classList.add('slide-in--up');
  });
}, missionStatementOptions);

export const missionTitleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    console.log('Title', entry.intersectionRatio);

    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.5s';
      entry.target.classList.add('slide-in--up');
    }
  });
}, missionTitleOptions);

export const missionTextObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    console.log('Text', entry.intersectionRatio);
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.25s';
      entry.target.classList.add('slide-in--up');
    }
  });
}, missionTextOptions);
