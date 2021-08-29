import PATH from '../config/webPath';
import CONFIG from '../config/siteConfig';
import { useSelector,useDispatch } from 'react-redux';
import {  useEffect } from 'react';
import loaderAction from '../actions/loaderAction';

const CheckRedirection = (search) =>{
  let dispatch = useDispatch();
  alert(search);
  //dispatch(loaderAction.defaultVar());
  // const load = useSelector(state => state.agentReducer);
  // console.log(load);
  // const { validate,def } = load;
  // const unsecuredUrls = CONFIG.UNSECUREDSEGMENTS;
  // let dataArr = [];
  // unsecuredUrls.map((value)=>{
  //   dataArr.push(PATH[value]);
  // });
  // if(!dataArr.includes(search)){
  //   return validate;
  // }
  // return def;
  return "one";
}
export default CheckRedirection;
