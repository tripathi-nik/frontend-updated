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
  },
  profile: (search) => (dispatch) =>{
    let value = localStorage.getItem('token');

    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization':'Bearer '+value+''
        },
        body: JSON.stringify({user_id:search}),
    };

    return fetch(CONFIG[env]['SERVERURL']+'api/agent/user-profile',requestOptions)
      .then(res=>res.json())
      .then(res2=>{
        dispatch({type:loginPerformer.loadProfile,payload:res2});
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }
};
export default loginAction;
