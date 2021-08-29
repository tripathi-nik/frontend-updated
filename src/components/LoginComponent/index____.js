import {useState} from 'react';
import MESSAGES from '../../config/alertMessages';
import {FormHelperText,FormControl,TextField,InputAdornment,IconButton,OutlinedInput,Button}from '@material-ui/core';
import {Visibility,VisibilityOff}  from '@material-ui/icons';
import {Formik} from 'formik';
import * as Yup from 'yup';
const LoginComponent = props =>{
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  return(
   <Formik initialValues={{email_address:'',input_password:''}} onSubmit={(values, {setSubmitting})=>{

      }}
      validationSchema = {Yup.object().shape({
        email_address:Yup.string().email(MESSAGES.EMAIL_ERROR).required(MESSAGES.EMAIL_ERROR),
        input_password:Yup.string().min(8, MESSAGES.PASSWORD_CHARACTER_ERROR).required(MESSAGES.PASSWORD_REQUIRED_ERROR)
      })}
     >
  {props=>{
    const {
      touched,errors,handleBlur,handleChange,handleSubmit
    }=props;
   const handleChangePass = (prop) => (event) => {
     setValues({ ...values, [prop]: event.target.value });
   };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return(
    <form className="user" onSubmit={handleSubmit}>
        <FormControl fullWidth variant="outlined">
          <TextField
            type="email"
            label="Email Address"
            id="email_address"
            name="email_address"
            placeholder="Email Address"
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            margin="normal"
            variant="outlined"
            {...(errors.email_address&&touched.email_address)?{error:true}:{}}
           />
          {errors.email_address&&touched.email_address&&(
            <FormHelperText id="my-helper-text" error>{errors.email_address}</FormHelperText>
          )}
      </FormControl>
      <FormControl fullWidth variant="outlined">
       <OutlinedInput
         fullWidth
         margin="normal"
         variant="outlined"
         id="input_password"
         name="input_password"
         placeholder="Password"
         onBlur={handleBlur}
         {...(errors.input_password&&touched.input_password)?{error:true}:{}}
         type={values.showPassword ? 'text' : 'password'}
         value={values.input_password}
         onChange={(e)=>{ props.handleChange(e); handleChangePass('password')}}
         endAdornment={
           <InputAdornment position="end">
             <IconButton
               aria-label="toggle password visibility"
               onClick={handleClickShowPassword}
               onMouseDown={handleMouseDownPassword}
               onBlur={handleBlur}
               edge="end"
             >
               {values.showPassword ? <Visibility /> : <VisibilityOff />}
             </IconButton>
           </InputAdornment>
         }
        />
        {errors.input_password&&touched.input_password&&(
          <FormHelperText id="my-helper-text" error>{errors.input_password}</FormHelperText>
        )}
      </FormControl>
      <FormControl fullWidth>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </FormControl>
    </form>
    /*<form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          id="email_address"
          label="Email Address"
          style={{marginBottom:10}}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          margin="normal"
          variant="outlined"
         />
      </div>
      <FormControl fullWidth variant="outlined">
        <InputLabel error htmlFor="outlined-adornment-password" style={{backgroundColor:'white',paddingLeft:'10px',paddingRight:'10px'}}>Password</InputLabel>

        <OutlinedInput
        fullWidth
        id="input_password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onBlur={handleBlur}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id="my-helper-text" error>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </FormControl>

    </form>*/
   )
  }}
  </Formik>
  )
}
export default LoginComponent;
