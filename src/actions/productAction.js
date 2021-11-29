import {listProducts} from '../actionTypes';
import CONFIG from '../config/siteConfig';
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'DEVELOPMENT':'PRODUCTION';
let value = localStorage.getItem('token');
const productAction = {
  products: (search) =>(dispatch) => {

    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization':'Bearer '+value+''
        },
        body: JSON.stringify({user_id:localStorage.getItem('usID')}),
    };
    return fetch(CONFIG[env]['SERVERURL']+'api/product/list',requestOptions)
      .then(res=>res.json())
      .then(res2=>{
        dispatch({type:listProducts.list,payload:res2});
        //dispatch(loaderAction.defaultVar());
      })
      .catch(error => {
        console.error('Error:', error);
      })
    }
};
export default productAction;
