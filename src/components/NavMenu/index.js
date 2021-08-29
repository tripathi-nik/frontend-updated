import {useState,useMemo} from 'react';
//import CheckRedirection from '../../custom/CheckRedirection';
import PATH from '../../config/webPath';
import CONFIG from '../../config/siteConfig';
import classes from './menu.module.css';
import { Link,useLocation,useHistory} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import loginAction from '../../actions/loginAction';

const NavMenu = () =>{
  const elements = ['HOME', 'REGISTER', 'LOGIN'];
  const [toggle,setToggle] = useState('-300px');
  //const [apply,setApply] = useState(false);
  const location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();
  const userAgent = useSelector(state => state.agentReducer);

  let { validate } = userAgent;
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

  const mapMemo = useMemo(()=>{
    const token = localStorage.getItem('token');
    const unSecURL = CONFIG.UNSECUREDSEGMENTS;
    const items = [];
    for (const [index, value] of unSecURL.entries()) {
      items.push(PATH[value]);
    }
    const pathname = location.pathname;
    if(items.includes(pathname)&&token!==null){
      history.push(PATH.HOME);
    }
    if(!items.includes(pathname)&&token===null){
      history.push(PATH.LOGIN);
    }
  },[validate]);
  return(
    <>
      <div id="mySidenav" className={classes.sidenav} style={{marginLeft:''+toggle+''}}>
        <span className={classes.closebtn} onClick={()=>closeNav()}>&times;</span>
        { elements.map((value, index) => {
                return <Link className={classes.navLink} to={PATH[value]} key={index}>{value}</Link>

          })}
          <button className={classes.logoutButton} onClick={doLogout}>Logout</button>
      </div>
      <span style={{fontSize:'22px',cursor:'pointer'}} onClick={()=>openNav()}>&#9776;</span>
      <Link to={PATH.HOME}>
        <img className={classes.logo} src={CONFIG.SITELOGO} alt=""/>
      </Link>
    </>
  )
}
export default NavMenu;
