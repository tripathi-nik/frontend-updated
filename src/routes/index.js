import PATHS from '../config/webPath';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import Account from '../containers/Account';
import Profile from '../containers/Profile';
import Product from '../containers/Products';
import ProductEdit from '../containers/Products/productEdit';

const routes = [
  { path: PATHS.HOME, exact:true, component: Home },
  { path: PATHS.LOGIN, exact:true, component: Login },
  { path: PATHS.REGISTER, exact:true, component: Register },
  { path: PATHS.ACCOUNT, exact:true, component: Account },
  { path: PATHS.PROFILE, exact:true, component: Profile },
  { path: PATHS.PRODUCT, exact:true, component: Product },
  { path: PATHS.PRODUCTEDIT, exact:true, component: ProductEdit }
];

export default routes;
