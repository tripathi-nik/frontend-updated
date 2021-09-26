import classes from './profileComponent.module.css';
import { useSelector,useDispatch } from 'react-redux';
import MESSAGES from '../../config/alertMessages';
import {Formik} from 'formik';
import * as Yup from 'yup';
import profileAction from '../../actions/loginAction';
import CONFIG from '../../config/siteConfig';
import Toast from '../Toast';

const ProfileComponent = () =>{

 const dispatch = useDispatch();
 const load = useSelector(state => state.loaderReducer);
 let log = useSelector(state => state.agentReducer);
 const toas = useSelector(state => state.toastReducer);
 let { display } = toas;
 return(

  <Formik initialValues={{
    first_name:log.first_name,
    last_name:log.last_name,
    age:log.age,
    sex:log.sex,
    local_address:log.local_address,
    city:log.city,
    state:log.state,
    zip:log.zip
  }} enableReinitialize onSubmit={(values, {setSubmitting})=>{
       dispatch(profileAction.profileUpdate(values));

     }}
     validationSchema = {Yup.object().shape({
       first_name:Yup.string().required(MESSAGES.FIRST_NAME),
       local_address:Yup.string().required(MESSAGES.Local_ADDRESS),
       city:Yup.string().required(MESSAGES.City),
       state:Yup.string().required(MESSAGES.State),
       zip:Yup.string().required(MESSAGES.Zip),
     })}
    >
 {props=>{
   const {
     touched,errors,handleBlur,handleSubmit,values,handleChange
   }=props;

  return(

    <form className={classes.form} onSubmit={handleSubmit}>
       {display==='block'&&<Toast message={MESSAGES.PROFILE_SUCCESS}/>}
      {log.status_code&&log.status_code===MESSAGES.WRONG_CREDENTIAL&&<div className={classes.error}>{MESSAGES[log.error]}</div>}
      <div className={classes.formGroup}>
        <input
         type="text"
         name="first_name"
         onChange={handleChange}
         onBlur={handleBlur}
         value = {values.first_name||''}
         className={classes.formElement}
         placeholder="First Name*"
         {...(errors.first_name&&touched.first_name)?{error:"true"}:{}}
        />
        {errors.first_name&&touched.first_name&&(
          <span className={classes.errorMessage}>{errors.first_name}</span>
        )}
      </div>
      <div className={classes.formGroup}>
        <input
         type="text"
         name="last_name"
         onChange={handleChange}
         onBlur={handleBlur}
         className={classes.formElement}
         value = {values.last_name||''}
         placeholder="Last Name*"
        />
      </div>
      <div className={classes.formGroup}>
      <select
        name="sex"
        value={values.sex||''}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block',width: '97%',height: '37px',background: 'transparent',border:'1px solid silver' }}
      >
      <option value="" label="Select Gender" />
        <option value="male" label="Male" />
        <option value="female" label="Female" />
      </select>
      </div>
      <div className={classes.formGroup}>
        <input
         type="number"
         name="age"
         onChange={handleChange}
         onBlur={handleBlur}
         className={classes.formElement}
         value = {values.age||''}
         placeholder="Age"
        />
      </div>
      <div className={classes.formGroup}>
        <input
         type="text"
         name="local_address"
         onChange={handleChange}
         onBlur={handleBlur}
         className={classes.formElement}
         value = {values.local_address||''}
         placeholder="Local Address*"
        />
        {errors.local_address&&touched.local_address&&(
          <span className={classes.errorMessage}>{errors.local_address}</span>
        )}
      </div>
      <div className={classes.formGroup}>
        <input
         type="text"
         name="city"
         onChange={handleChange}
         onBlur={handleBlur}
         className={classes.formElement}
         value = {values.city||''}
         placeholder="City*"
        />
        {errors.city&&touched.city&&(
          <span className={classes.errorMessage}>{errors.city}</span>
        )}
      </div>
      <div className={classes.formGroup}>
        <input
         type="text"
         name="state"
         onChange={handleChange}
         onBlur={handleBlur}
         className={classes.formElement}
         value = {values.state||''}
         placeholder="State*"
        />
        {errors.state&&touched.state&&(
          <span className={classes.errorMessage}>{errors.state}</span>
        )}
      </div>
      <div className={classes.formGroup}>
        <input
         type="text"
         name="zip"
         onChange={handleChange}
         onBlur={handleBlur}
         className={classes.formElement}
         value = {values.zip||''}
         placeholder="Zipcode*"
        />
        {errors.zip&&touched.zip&&(
          <span className={classes.errorMessage}>{errors.zip}</span>
        )}
      </div>
      <button type="submit" className={classes.submitBtn}>Update Profile</button>
      {load.load===true&&<div className={classes.loaderContainer}><img src={CONFIG.LOADERIMAGE} className={classes.loadImage} alt=""/></div>}
    </form>
  )
}}
</Formik>
)
}
export default ProfileComponent;
