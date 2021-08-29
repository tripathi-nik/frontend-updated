import LoginComponent from '../../components/LoginComponent';
import CONFIG from '../../config/siteConfig';
import classes from './loginContainer.module.css';
const Login = (props) => {
return (
  <div className={classes.middleSection}>
    <div className={[classes.grid, classes.leftGrid].join(' ')}>
      <h2 className={classes.heading}>{CONFIG.LOGINFORMHEAD}</h2>
      <div className={classes.loginSection}>
         <LoginComponent/>
       </div>
     </div>
     <div className={[classes.grid, classes.imageDiv, classes.rightGrid].join(' ')}></div>
  </div>
);
};

export default Login;
