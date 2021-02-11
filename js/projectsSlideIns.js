export const projectImageParallaxer = document.querySelectorAll(
  '.image-background-image-sizer'
);

const projectGridImageOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.75,
};

export const projectImageParallaxerObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.firstElementChild.classList.add('slide-in--up');
      }
    });
  },
  projectGridImageOptions
);
