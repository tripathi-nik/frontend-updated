import classes from './header.module.css';
import NavMenu from '../NavMenu';
const Header = () =>{
  return(
    <header className={classes.header}>
       <NavMenu/>
    </header>
  );
};
export default Header;
