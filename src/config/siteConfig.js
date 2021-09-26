const CONFIG = {
  NAVWIDTH: '250px',
  TOAST_STOP: 3000,
  SITELOGO: 'https://www.nebiolab.com/wp-content/uploads/2019/08/fixed-logo.png',
  LOGINFORMHEAD:'Login to access your account.',
  LOGOUTICON:'http://localhost/ecom-project/frontend-updated/src/media/5172972_arrow_entrance_exit_internet_log_icon.png',
  REGISTERFORMHEAD:'Create your account to proceed.',
  LOADERIMAGE:'http://localhost/ecom-project/frontend-updated/src/media/Ajux_loader.gif',
  DEVELOPMENT:{
     SERVERURL: 'http://localhost:5000/',
     IMAGEPATH: 'http://localhost/ecom-project/ecom-backend/',
  },
  PRODUCTION:{
    SERVERURL: 'http://localhost:5000/',
    IMAGEPATH: 'https://infinite-hamlet-52488.herokuapp.com/',
  },
  LISTURL:'https://jsonplaceholder.typicode.com/todos/',
  UNSECUREDSEGMENTS:['REGISTER','LOGIN'],
  SECUREDSEGMENTS:['PROFILE'],
};

export default CONFIG;
