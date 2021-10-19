import React from 'react';

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