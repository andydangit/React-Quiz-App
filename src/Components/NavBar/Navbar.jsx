import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false);
      } else{
          setButton(true);
      }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick ={closeMenu}>
            {/* A icon  */}
           React Quiz
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item" >
              <Link to="/Contact" className="nav-links" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline"> Projects </Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
