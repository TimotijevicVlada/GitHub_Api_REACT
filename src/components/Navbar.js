import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <i className="fab fa-github"></i>
                <span>GitHub Api</span>
            </div>
            <div className='navbar_menu'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/search" className='link'>Search</Link>
            </div>
        </nav>
    )
};

export default Navbar;
