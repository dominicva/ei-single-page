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

const setElCssProps = (element, props) => {
  for (const prop in props) {
    element.style[prop] = props[prop];
  }
};

export const projectMouseEnterHandler = () => {
  if (window.innerWidth >= 1024) {
    setElCssProps(gridItem, { borderColor: '#ffb300' });
    setElCssProps(projectImage, { opacity: '0' });
    // HEADLINE
    setElCssProps(projectContentHeadline, {
      display: 'block',
      position: 'absolute',
      top: '70%',
      paddingLeft: '24px',
    });
    // BODY
    setElCssProps(projectContentBody, {
      display: 'block',
      position: 'absolute',
      bottom: '0%',
      paddingLeft: '24px',
    });
    // CTA
    setElCssProps(projectContentCta, {
      display: 'flex',
      position: 'absolute',
      bottom: '-100%',
      paddingLeft: '24px',
      paddingRight: '24px',
      width: '100%',
    });

    const delay = 20;
    setTimeout(() => {
      setElCssProps(projectContentHeadline, {
        opacity: '1',
        top: '5%',
      });
      setElCssProps(projectContentTitle, {
        bottom: '60%',
      });
      setElCssProps(projectContentBody, {
        opacity: '1',
        bottom: '42%',
      });
      setElCssProps(projectContentCta, {
        opacity: '1',
        bottom: '5%',
      });
    }, delay);
  }
};

export const projectMouseLeaveHandler = () => {
  if (window.innerWidth >= 1024) {
    gridItem.style.borderColor = '';
    projectImage.style.opacity = '1';
    projectContentHeadline.style = '';
    projectContentTitle.style.bottom = '0';
    projectContentBody.style = '';
    projectContentCta.style = '';
    // setElCssProps(gridItem, { borderColor: '' });
    // setElCssProps(projectImage, { opacity: '1' });
    // setElCssProps(projectContentHeadline, { opacity: '0%', top: '70%' });
    // setElCssProps(projectContentTitle, { bottom: '0%' });
    // setElCssProps(projectContentBody, { bottom: '%' });
  }
};
