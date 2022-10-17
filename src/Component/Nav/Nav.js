import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Photo/logo.png';
const Nav = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <div className='container'>
                <nav>
                    <div className="nav-flex">
                        <div className="nav-logo">
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="nav-item">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>About Us</Link></li>
                                <li><Link to='/'>Why us</Link></li>
                                <li><Link to='/'>All Products</Link></li>
                                <li><Link to='/'>All Categories</Link></li>
                                <li><Link to='/'>Blogs</Link></li>
                                <li><Link to='/'>Login/Sign Up</Link></li>
                                <li><Link to='/'>Post Ads</Link></li>
                            </ul>
                        </div>
                        <div className="small-nav">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;