export { default as Toast } from './Toast';

export const ToastAnimation = {
  initial: {
    y: 150,
    x: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
