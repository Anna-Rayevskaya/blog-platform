import classes from "./Header.module.scss";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from "react-redux";

function Header() {
  const registration = useSelector((state)=> state.registration.registration)

  if(registration){
    return(
      <>
      <div className={classes.header}>
        <span>Realworld Blog</span>
        <div>
          <Link to='#'><button className={classes.create}>Create article</button></Link>
          <Link to='profile'>
            <button className={classes.signUp}>profile</button>
            <img className={classes.img}  alt="user img"/>
          </Link>
          
          <Link to='#'><button className={classes.logOut}>Log Out</button></Link>
          
        </div>
      </div>
      <Outlet />
    </>
    )
  }

  return (
    <>
      <div className={classes.header}>
        <span>Realworld Blog</span>
        <div>
          <NavLink to='/sign-in'><button className={classes.signIn}>Sign In</button></NavLink>
          <NavLink to='/sign-up'><button className={classes.signUp}>Sign Up</button></NavLink>
          
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
