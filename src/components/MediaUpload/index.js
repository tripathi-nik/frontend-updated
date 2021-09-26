import {useState} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import CONFIG from '../../config/siteConfig';

const token = localStorage.getItem('token');
const env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'DEVELOPMENT':'PRODUCTION';
const Media = () =>{
  const [percent, setPercent] = useState(0);
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
        console.log(data);
        setImageUrl(CONFIG[env]['IMAGEPATH']+data.path);
      }
     })
  }
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
