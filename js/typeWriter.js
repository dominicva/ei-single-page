export const projectsHeader = document.querySelector(
  '.project-grid__header__title'
);

// initialise parameters and helper vars
const txt = 'projects';
const speed = 50;
let i = 0;

// typing effect animation
const typeWriter = () => {
  if (i < txt.length) {
    projectsHeader.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

// list of observer options
const options = {
  root: null,
  rootMargin: '0px 0px -100px 0px', // NB negative margin
  threshold: 0,
};

// instantiate a new Intersection Observer
export const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio == 1) {
      typeWriter();
    }
  });
}, options);
