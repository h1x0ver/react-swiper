import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="header-left">
                <Link className='react-link' to='/'><h3>LOGO</h3></Link>
            </div>

            <div className="header-middle">
                <Link className='react-link' to='about'><a>ABOUT</a></Link>
                <Link className='react-link' to='education'><a>EDUCATION</a></Link>
                <Link className='react-link' to='blog'><a>BLOG</a></Link>
            </div>

            <div className="header-right">
                <Link className='react-link' to='sign-up'><a>SIGN-UP</a></Link>
                <Link className='react-link' to='sign-in'><a>SIGN-IN</a></Link>
            </div>

        </header>
    );
};

export default Header;