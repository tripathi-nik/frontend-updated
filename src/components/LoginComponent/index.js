import classes from './loginComponent.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {useRef} from 'react';
import MESSAGES from '../../config/alertMessages';
import {Formik} from 'formik';
import * as Yup from 'yup';
import loginAction from '../../actions/loginAction';
import CONFIG from '../../config/siteConfig';

const LoginComponent = () =>{
 const inputRef = useRef({});
 const dispatch = useDispatch();
 const load = useSelector(state => state.loaderReducer);
 const log = useSelector(state => state.agentReducer);
 
 return(
  <Formik initialValues={{email_address:'',input_password:''}} onSubmit={(values, {setSubmitting})=>{
       dispatch(loginAction.login(values));
     }}
     validationSchema = {Yup.object().shape({
       email_address:Yup.string().email(MESSAGES.EMAIL_ERROR).required(MESSAGES.EMAIL_ERROR),
       input_password:Yup.string().min(8, MESSAGES.PASSWORD_CHARACTER_ERROR).required(MESSAGES.PASSWORD_REQUIRED_ERROR)
     })}
    >
 {props=>{
   const {
     touched,errors,handleBlur,handleSubmit
   }=props;

   const testData = (e,selector) =>{
     let val = e.target.value;
     if(val&&val!==null&&val!==''){
       inputRef.current[selector].setAttribute('style','margin-top:-10px;background:white');
     }else{
       inputRef.current[selector].removeAttribute('style');
     }
   }

  return(
    <form className={classes.form} onSubmit={handleSubmit}>
      {log.status_code&&log.status_code===MESSAGES.WRONG_CREDENTIAL&&<div className={classes.error}>{MESSAGES[log.error]}</div>}
      <div className={classes.formGroup}>
        <label ref={el => inputRef.current['emailLable'] = el} className={classes.formLabel} {...(errors.email_address&&touched.email_address)?{error:"true"}:{}}>Email Address</label>
        <input
         type="email"
         name="email_address"
         onChange={(e)=>{ props.handleChange(e); testData(e,'emailLable')}}
         onBlur={handleBlur}
         className={classes.formElement}
         {...(errors.email_address&&touched.email_address)?{error:"true"}:{}}
        />
        {errors.email_address&&touched.email_address&&(
          <span className={classes.errorMessage}>{errors.email_address}</span>
        )}
      </div>
      <div className={classes.formGroup}>
        <label ref={el => inputRef.current['passwordLable'] = el} className={classes.formLabel} {...(errors.input_password&&touched.input_password)?{error:"true"}:{}}>Password</label>
        <input
         type="password"
         name="input_password"
         onChange={(e)=>{ props.handleChange(e); testData(e,'passwordLable')}}
         onBlur={handleBlur}
         className={classes.formElement}
          {...(errors.input_password&&touched.input_password)?{error:"true"}:{}}
        />
        {errors.input_password&&touched.input_password&&(
          <span className={classes.errorMessage}>{errors.input_password}</span>
        )}
      </div>
      <button type="submit" className={classes.submitBtn}>Login</button>
      {load.load===true&&<div className={classes.loaderContainer}><img src={CONFIG.LOADERIMAGE} className={classes.loadImage} alt=""/></div>}
    </form>
  )
}}
</Formik>
)
}
export default LoginComponent;
