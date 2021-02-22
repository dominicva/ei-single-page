export const projectsHeaderTitle = document.querySelector(
  '.grid__header__title'
);

// initialise parameters and helper vars
const txt = 'projects';
const speed = 50;
let i = 0;

// typing effect animation
const typeWriter = () => {
  if (i < txt.length) {
    projectsHeaderTitle.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

// list of typeWriterObserver options
const options = {
  root: null,
  rootMargin: '0px 0px -120px 0px', // NB negative margin
  threshold: 0,
};

// instantiate a new IntersectiontypeWriterOObserver
export const typeWriterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio == 1) {
      typeWriter();
    }
  });
}, options);
