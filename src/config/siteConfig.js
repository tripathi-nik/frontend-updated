const CONFIG = {
  NAVWIDTH: '250px',
  SITELOGO: 'https://www.nebiolab.com/wp-content/uploads/2019/08/fixed-logo.png',
  LOGINFORMHEAD:'Login to access your account.',
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
};

export default CONFIG;
