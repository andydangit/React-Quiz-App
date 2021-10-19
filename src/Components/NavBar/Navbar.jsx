import React from 'react';
import {Nav, NavLink, Bars, NavMenu } from './NavBarElements'

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
                    <NavLink to="/quiz" activeStyle> 
                    Quiz
                    </NavLink>
                    <NavLink to="/about" activeStyle> 
                    About
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;