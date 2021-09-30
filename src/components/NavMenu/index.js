import {useState,useMemo} from 'react';
import WebConfig from '../../custom/WebConfig';
import PATH from '../../config/webPath';
import CONFIG from '../../config/siteConfig';
import classes from './menu.module.css';
import { Link,useLocation,useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import loginAction from '../../actions/loginAction';

const NavMenu = () =>{
  const token = localStorage.getItem('token');
  const unSecURL = CONFIG.UNSECUREDSEGMENTS;
  const secURL = CONFIG.SECUREDSEGMENTS;
  let elements = token?secURL:unSecURL;
  const [toggle,setToggle] = useState('-300px');
  const [redirect,setRedirect] = useState(null);
  const location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();
  const items = [];
  const secitems = [];
  let i = 0;
  let j = 0;
  for (;i<unSecURL.length;i++){
    items.push(PATH[unSecURL[i]]);
  }
  for(;j<secURL.length;j++) {
    secitems.push(PATH[secURL[j]]);
  }
  WebConfig();
  const openNav = () =>{
    console.log("open nav function hit.");
    setToggle('0px');
  };

  const closeNav = () =>{
    console.log("close nav function hit.");
    setToggle('-300px');
  };

  const doLogout = () =>{
    dispatch(loginAction.logout({}));
    console.log("be ready for call back");
  };
  const pathname = location.pathname;
  useMemo(()=>{
    console.log("blast furnance");
    if(token!==null){
      setRedirect('one');
    }else{
      setRedirect('two');
    }
  },[token]);
  if(!secitems.includes(pathname)&&redirect==='one'){
    history.push(PATH.PROFILE);
  }
  if(secitems.includes(pathname)&&redirect==='two'){
    history.push(PATH.LOGIN);
  }

  return(
    <>
      <div id="mySidenav" className={classes.sidenav} style={{marginLeft:''+toggle+''}}>
        <span className={classes.closebtn} onClick={()=>closeNav()}>&times;</span>
        { elements.map((value, index) => {
                return <Link className={classes.navLink} to={PATH[value]} key={index}>{value}</Link>

          })}
          {token&&<button className={classes.logoutButton} onClick={doLogout}><img src={CONFIG.LOGOUTICON} alt=""/></button>}
      </div>
      <span style={{fontSize:'22px',cursor:'pointer'}} onClick={()=>openNav()}>&#9776;</span>
      <Link to={PATH.HOME}>
        <img className={classes.logo} src={CONFIG.SITELOGO} alt=""/>
      </Link>
    </>
  )
}
export default NavMenu;
