import classes from './header.module.css';
import NavMenu from '../NavMenu';
const Header = () =>{
  console.log("header component render.")
  return(
    <header className={classes.header}>
       <NavMenu/>
    </header>
  );
};
export default Header;
