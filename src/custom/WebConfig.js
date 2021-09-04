import {useMemo,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
const WebConfig = () =>{
  const [user,setUser] = useState(null);
  let log = useSelector(state => state.agentReducer);
  useMemo(()=>{
    let userID = localStorage.getItem('usID');
    setUser(!log._id&&log.validate?log.validate:null);
    //console.log(log)
  },[log]);
  if(user===true){
    console.log("now hits the dispatch");
    setUser(null);
  }
  //return `user id of the site ${userID}`;
}
export default WebConfig;
