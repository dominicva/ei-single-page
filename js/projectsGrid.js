export const gridItemContainers = document.querySelectorAll(
  '.project-grid__grid-item-container'
);
export const projectGridItems = document.querySelectorAll(
  '.project-grid__grid__item'
);

const setElCssProps = (element, props) => {
  for (const prop in props) {
    element.style[prop] = props[prop];
  }
};

export const projectMouseEnterHandler = event => {
  if (window.innerWidth >= 1024) {
    setElCssProps(event.target.firstElementChild, { borderColor: '#0053d6' });
    setElCssProps(event.target.querySelector('.project-grid__image'), {
      opacity: '0',
    });
    // HEADLINE
    setElCssProps(event.target.querySelector('.project-grid__content'), {
      transform: 'translateY(0px)',
      paddingLeft: '24px',
    });

    const delay = 20;
    setTimeout(() => {
      setElCssProps(
        event.target.querySelector('.project-grid__content__headline'),
        {
          opacity: '1',
          transform: 'translateY(0px)',
        }
      );
      setElCssProps(
        event.target.querySelector('.project-grid__content__title'),
        {
          'grid-row-start': '2',
          'grid-row-end': '4',
        }
      );
      setElCssProps(
        event.target.querySelector('.project-grid__content__body'),
        {
          opacity: '1',
        }
      );
      setElCssProps(event.target.querySelector('.project-grid__content__cta'), {
        opacity: '1',
      });
    }, delay);
  }
};

export const projectMouseLeaveHandler = event => {
  if (window.innerWidth >= 1024) {
    event.target.firstElementChild.style.borderColor = '';
    event.target.querySelector('.project-grid__image').style.opacity = '1';
    event.target.querySelector('.project-grid__content__headline').style = '';
    event.target.querySelector('.project-grid__content__title').style.bottom =
      '0';
    event.target.querySelector(
      '.project-grid__content__title'
    ).style.gridRowStart = '8';
    event.target.querySelector(
      '.project-grid__content__title'
    ).style.gridRowEnd = '8';
    event.target.querySelector('.project-grid__content__body').style = '';
    event.target.querySelector('.project-grid__content__cta').style = '';
  }
};
