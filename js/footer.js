const emailInputEl = document.querySelector('.footer__email-input');

export const emailInputPlaceholderHandler = () => {
  if (window.innerWidth >= 768) {
    emailInputEl.setAttribute(
      'placeholder',
      'enter your email to receive the earthrise newsletter'.toUpperCase()
    );
  }
};
