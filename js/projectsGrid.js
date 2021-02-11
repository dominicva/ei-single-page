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
    setElCssProps(
      event.target.querySelector('.project-grid__content__headline'),
      {
        display: 'block',
        position: 'absolute',
        top: '70%',
        paddingLeft: '24px',
      }
    );
    // BODY
    setElCssProps(event.target.querySelector('.project-grid__content__body'), {
      display: 'block',
      position: 'absolute',
      bottom: '0%',
      paddingLeft: '24px',
    });
    // CTA
    setElCssProps(event.target.querySelector('.project-grid__content__cta'), {
      display: 'flex',
      position: 'absolute',
      bottom: '-100%',
      paddingLeft: '24px',
      paddingRight: '24px',
      width: '100%',
    });

    const delay = 20;
    setTimeout(() => {
      setElCssProps(
        event.target.querySelector('.project-grid__content__headline'),
        {
          opacity: '1',
          top: '5%',
        }
      );
      setElCssProps(
        event.target.querySelector('.project-grid__content__title'),
        {
          bottom: '60%',
        }
      );
      setElCssProps(
        event.target.querySelector('.project-grid__content__body'),
        {
          opacity: '1',
          bottom: '42%',
        }
      );
      setElCssProps(event.target.querySelector('.project-grid__content__cta'), {
        opacity: '1',
        bottom: '5%',
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
    event.target.querySelector('.project-grid__content__body').style = '';
    event.target.querySelector('.project-grid__content__cta').style = '';
  }
};
