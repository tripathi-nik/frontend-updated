import { loadToast } from '../actionTypes';
const data = {
 display:'none',
};
const toast = (state=data, action) => {
  switch (action.type) {
  case loadToast.start:{
    const toast = {
      ...data,
      display:'block',
    }
    return toast;
  }
  case loadToast.stop:{
    const toast = {
      ...data,
      display:'none',
    }
    return toast;
  }
  default:
  return state;
  }
};

export default toast;
