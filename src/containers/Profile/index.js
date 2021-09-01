import classes from './profile.module.css';
import CONFIG from '../../config/alertMessages';
import ProfileComponent from '../../components/Profile';
const Profile = (props) => {
return (
  <div className={classes.middleSection}>
    <div className={[classes.grid, classes.leftGrid].join(' ')}>
      <h2 className={classes.heading}>{CONFIG.PROFLE_HEADER}</h2>
      <div className={classes.loginSection}>
         <ProfileComponent/>
       </div>
     </div>
  </div>
);
};

export default Profile;
