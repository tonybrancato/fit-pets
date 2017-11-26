import React from 'react';
// import Connect from 'react-redux';
import {Link} from 'react-router-dom';

import './navbar.css';

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/register">Home</Link>
        </nav>
    );
};