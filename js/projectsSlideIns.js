// NB to be converted to querySelectorAll when more images added
export const projectImageParallaxer = document.querySelector(
  '.project-grid__image__parallaxer'
);

const projectGridImageOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.75,
};

export const projectImageParallaxerObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.firstElementChild.classList.add('slide-in--up');
      }
    });
  },
  projectGridImageOptions
);
