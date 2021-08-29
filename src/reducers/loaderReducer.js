import { loaderTypes } from '../actionTypes';
const data = {
 load:false,
};
const loader = (state=data, action) => {
  switch (action.type) {
  case loaderTypes.start:{
    const loader = {
      ...data,
      load:true,
    }
    return loader;
  }
  case loaderTypes.stop:{
    const loader = {
      ...data,
      load:false,
    }
    return loader;
  }
  default:
  return state;
  }
};

export default loader;
