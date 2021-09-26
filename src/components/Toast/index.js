import { useSelector,useDispatch } from 'react-redux';
import classes from './toast.module.css';
import toastAction from '../../actions/toastAction';
import CONFIG from '../../config/siteConfig'

let Toast = props =>{
  const { message } = props;
  const dispatch = useDispatch();
  const toas = useSelector(state => state.toastReducer);

  let classer = [classes.toastContainer];
  let { display } = toas;
  console.log(`Display for the data is ${display}`)
  if(display==='block'){
     setTimeout(() => {
       dispatch(toastAction.stop());
     }, CONFIG.TOAST_STOP);
  }
  return(
    <>

    <div className={classer.join(" ")} style={{display:display,}}>
     <p>{message}</p>
    </div>
    </>
  )
}
export default Toast;
