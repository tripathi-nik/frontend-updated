import RegisterComponent from '../../components/RegisterComponent';
import CONFIG from '../../config/siteConfig';
import classes from './register.module.css';
const Register = (props) => {
return (
  <div className={classes.middleSection}>
    <div className={[classes.grid, classes.leftGrid].join(' ')}>
      <h2 className={classes.heading}>{CONFIG.REGISTERFORMHEAD}</h2>
      <div className={classes.loginSection}>
         <RegisterComponent/>
       </div>
     </div>
     <div className={[classes.grid, classes.imageDiv, classes.rightGrid].join(' ')}></div>
  </div>
);
};

export default Register;
