import classes from './profile.module.css';
const Profile = (props) => {
return (
  <div className={classes.middleSection}>
    <div className={[classes.grid, classes.leftGrid].join(' ')}>
      <h2 className={classes.heading}>Hello Test</h2>
      <div className={classes.loginSection}>
         <p>Welcome to profile page</p>
       </div>
     </div>
  </div>
);
};

export default Profile;
