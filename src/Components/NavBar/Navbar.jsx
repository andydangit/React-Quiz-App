import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./styles";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1> Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
