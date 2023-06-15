import { Link, NavLink } from "react-router-dom";
// import NewsAlert from "./Newsalert";
import classes from "./navbar.module.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState,useRef } from "react";
const NavBar = () => {
  const navref = useRef();
  const [ismobile, setismobile] = useState(false);
  // const showNavBar = () => {
  //   navref.current.classList.toogle(classes.resnav);
  // };
  const toggleMobile = () => {
    setismobile(!ismobile);
  };
  const showNavBar = () => {
    toggleMobile();
  };
  return (
    <nav className={`${classes.navbar} ${ismobile ? classes.resnav : ""}`} ref={navref}>
      <h3>
        <Link to="/" className={classes.title}>
          Travco
        </Link>
        {/* <span className={classes.caption}>-Travel to u r dream world</span> */}
      </h3>
      <ul className={classes.navelements}>
        {/* <button onClick={showNavBar} className={classes.navBtn}><AiOutlineClose className={classes.closeBtn}/></button> */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/plan"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Plans
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/branches"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Branches
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            About
          </NavLink>
        </li>
      </ul>
      {/* <NewsAlert className={classes.news}/> */}
      {/* <button onClick={showNavBar} className={classes.navBtn}><FaBars className={classes.showBtn}/></button> */}
      <button onClick={showNavBar} className={classes.navBtn}>
        {!ismobile ? (
          <AiOutlineClose className={classes.closeBtn} />
        ) : (
          <FaBars className={classes.showBtn} />
        )}
      </button>
    </nav>
  );
};
export default NavBar;
