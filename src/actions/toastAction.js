import { loadToast } from '../actionTypes';

const toastType = {
  start: () => ({type: loadToast.start}),
  stop: () => ({type: loadToast.stop}),
};

export default toastType;
