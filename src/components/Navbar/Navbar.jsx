import React from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
return (
    <nav className="navbar">
        <div className="navbar-brand">
            <span className="brand-logo">NewsHub</span>
        </div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">World</a></li>
            <li><a href="/">Politics</a></li>
            <li><a href="/">Technology</a></li>
            <li><a href="/">Entertainment</a></li>
            <li><a href="/">Sports</a></li>
        </ul>
    </nav>
);
}

export default Navbar;
