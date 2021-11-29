import {listProducts} from '../actionTypes';
const data = {
  products:[]
};
const productsReducer = (state=data,action) =>{
  switch (action.type){
    case listProducts.list:{
      const products = {...{products:action.payload.result}}
      return products;
    }

    default:
    return state
  }
}
export default productsReducer;
