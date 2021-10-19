import {useState,useMemo} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import CONFIG from '../../config/siteConfig';
import registerAction from '../../actions/registerAction';

const token = localStorage.getItem('token');
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'DEVELOPMENT':'PRODUCTION';
const Media = () =>{

  const dispatch = useDispatch();
  const [percent, setPercent] = useState(0);
  let { profile_picture } = useSelector(state => state.agentReducer);

  const [imageUrl, setImageUrl] = useState(null);

  const onChange = files =>{
  setPercent(0);
    setImageUrl(null);
    let data = new FormData();
    data.append('myImage',files[0]);
    const option = {
      onUploadProgress :(progressEvent)=>{
        const {loaded,total} = progressEvent;
        let percentage = Math.floor((loaded*100)/total);
        setPercent(percentage);
      },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization':'Bearer '+token+''
      }
    }
    axios.post(CONFIG[env]['SERVERURL']+'api/agent/media-upload',data,option).then(res=>{
      const {data,status} = res;
      if(status===200){
        setImageUrl(CONFIG[env]['IMAGEPATH']+data.path);
        dispatch(registerAction.profileImage(data.path));
      }
     })
  }

  useMemo(()=>{
    setImageUrl(profile_picture?CONFIG[env]['IMAGEPATH']+profile_picture:null);
  },[profile_picture])
  return(
    <Dropzone onDrop={onChange}>
       {({getRootProps, getInputProps}) => (
         <section>
           <div {...getRootProps()}>
             <input {...getInputProps()} />
             <p><i className="fa fa-upload fa-2x" aria-hidden="true"></i></p>
             <p>Drag 'n' drop some files here, or click to select files</p>

           </div>
           {imageUrl!==null&&
            <img src={imageUrl} alt="UserProfile" style={{"width":"400px"}}/>
           }
         </section>
       )}
     </Dropzone>
  );
}
export default Media;
