import {userRegister} from '../actionTypes';
import CONFIG from '../config/siteConfig';
//import useSWR from 'swr';
import loaderAction from './loaderAction';
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'DEVELOPMENT':'PRODUCTION';
const registerAction = {
  register: (search) =>(dispatch) => {
    dispatch(loaderAction.start());
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(search),
    };
    return fetch(CONFIG[env]['SERVERURL']+'api/agent/add',requestOptions)
      .then(res=>res.json())
      .then(res2=>{
        dispatch(loaderAction.stop());
        dispatch({type:userRegister.register,payload:res2});
      })
      .catch(error => {
        console.error('Error:', error);
      })
  },
  profileImage: (search) => (dispatch) =>{
     dispatch({type:userRegister.profilePicture,payload:search});
  }
};
export default registerAction;
