import {loginPerformer,userRegister} from '../actionTypes';
const data = {
  validate:localStorage.getItem('token')?true:false,
};
const agentReducer = (state=data,action) =>{
   if(action.payload&&action.payload.token){
     localStorage.setItem('token', action.payload.token);
   }
   switch(action.type) {
      case loginPerformer.login:{
        const userData = {...action.payload.data?action.payload.data:action.payload,...{validate:localStorage.getItem('token')?true:false}};
        return userData;
      }
      case loginPerformer.logout:{
        localStorage.removeItem('token');
        const userData = {...action.payload,...{validate:false}};
        return userData;
      }
      case userRegister.register:{
        const data = {...action.payload};
        return data;
      }
      default:
      return state
   }
}
export default agentReducer;
