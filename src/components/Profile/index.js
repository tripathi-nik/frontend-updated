import classes from './profileComponent.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {useRef} from 'react';
import MESSAGES from '../../config/alertMessages';
import PATHS from '../../config/webPath';
import {Formik} from 'formik';
import * as Yup from 'yup';
//import registerAction from '../../actions/registerAction';
import CONFIG from '../../config/siteConfig';
import  { Redirect } from 'react-router-dom'


const ProfileComponent = () =>{
 const inputRef = useRef({});
 const dispatch = useDispatch();
 const load = useSelector(state => state.loaderReducer);
 let log = useSelector(state => state.agentReducer);
 return(

  <Formik initialValues={{first_name:log.first_name,last_name:log.last_name,local_address:log?log.local_address:'',city:log?log.city:'',state:log?log.state:'',zip:log?log.zip:''}} onSubmit={(values, {setSubmitting})=>{
       //dispatch(registerAction.register(values));
       console.log(values);

     }}
     validationSchema = {Yup.object().shape({
       first_name:Yup.string().required(MESSAGES.FIRST_NAME),
       local_address:Yup.string().required(),
       city:Yup.string().required(),
       state:Yup.string().required(),
       zip:Yup.string().required(),
     })}
    >
 {props=>{
   const {
     touched,errors,handleBlur,handleSubmit,values,handleChange
   }=props;

  return(

    <form className={classes.form} onSubmit={handleSubmit}>

      {log.status_code&&log.status_code===MESSAGES.WRONG_CREDENTIAL&&<div className={classes.error}>{MESSAGES[log.error]}</div>}
      <div className={classes.formGroup}>
        <input
         type="text"
         name="first_name"
         onChange={handleChange}
         onBlur={handleBlur}
         value = {values.first_name}
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
         value = {values.last_name}
         placeholder="Last Name*"
        />
      </div>

      <button type="submit" className={classes.submitBtn}>Login</button>
      {load.load===true&&<div className={classes.loaderContainer}><img src={CONFIG.LOADERIMAGE} className={classes.loadImage} alt=""/></div>}
    </form>
  )
}}
</Formik>
)
}
export default ProfileComponent;
