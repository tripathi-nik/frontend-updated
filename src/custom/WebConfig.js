import {useMemo} from 'react';
import { useSelector,useDispatch } from 'react-redux';
const WebConfig = () =>{
  let userID = localStorage.getItem('usID');
  let log = useSelector(state => state.agentReducer);
  const fetchRecord = useMemo(()=>{
    alert("hello the change in state");
  },[log]);
  return `user id of the site ${userID}`;
}
export default WebConfig;
