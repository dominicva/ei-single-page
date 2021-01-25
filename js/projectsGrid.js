export const gridItemContainer = document.querySelector(
  '.project-grid__grid-item-container'
);

export const gridItem = document.querySelector('.project-grid__grid__item');

export const projectImage = document.querySelector('.project-grid__image');

export const projectContentTitle = document.querySelector(
  '.project-grid__content__title'
);

export const projectContentHeadline = document.querySelector(
  '.project-grid__content__headline'
);

export const projectContentBody = document.querySelector(
  '.project-grid__content__body'
);

export const projectContentCta = document.querySelector(
  '.project-grid__content__cta'
);

/* 
display | all
position | all
top | headline
padding-left | all
padding-right | cta 
width | cta
opacity | all
bottom | body, cta
*/

const setElCssProps = (element, props) => {
  for (const prop in props) {
    element.style[prop] = props[prop];
  }
};

const projectHoverHandler = () => {
  if (window.innerWidth >= 1024) {
    setElCssProps(gridItem, { borderColor: '#ffb300' });
    setElCssProps(projectImage, { opacity: '0' });
  }
};
