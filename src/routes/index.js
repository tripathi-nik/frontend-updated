import PATHS from '../config/webPath';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import Account from '../containers/Account';

const routes = [
  { path: PATHS.HOME, exact:true, component: Home },
  { path: PATHS.LOGIN, exact:true, component: Login },
  { path: PATHS.REGISTER, exact:true, component: Register },
  { path: PATHS.ACCOUNT, exact:true, component: Account }
];

export default routes;
