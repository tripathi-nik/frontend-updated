import {useMemo,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import loginAction from '../actions/loginAction';

const WebConfig = () =>{
  const dispatch = useDispatch();
  const [user,setUser] = useState(null);
  let log = useSelector(state => state.agentReducer);
  let userID = localStorage.getItem('usID');
  useMemo(()=>{
    setUser(!log._id&&log.validate?log.validate:null);
  },[log]);
  if(user===true){
    dispatch(loginAction.profile(userID));
    setUser(null);
  }
}
export default WebConfig;
