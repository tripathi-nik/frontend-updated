import {loginPerformer} from '../actionTypes';
import CONFIG from '../config/siteConfig';
//import useSWR from 'swr';
import loaderAction from './loaderAction';
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'DEVELOPMENT':'PRODUCTION';
const loginAction = {
  login: (search) =>(dispatch) => {
    dispatch(loaderAction.start());
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(search),
    };
    return fetch(CONFIG[env]['SERVERURL']+'api/agent/login',requestOptions)
      .then(res=>res.json())
      .then(res2=>{
        console.log(res2);
        dispatch(loaderAction.stop());
        dispatch({type:loginPerformer.login,payload:res2});
        //dispatch(loaderAction.defaultVar());
      })
      .catch(error => {
        console.error('Error:', error);
      })
  },
  logout: (search) => (dispatch) =>{
    dispatch({type:loginPerformer.logout,payload:{}});
    //dispatch(loaderAction.defaultVar());
  }
};
export default loginAction;
