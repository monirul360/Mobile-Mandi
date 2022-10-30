import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Photo/logo.png';
const Nav = () => {
    return (
        <div>
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
                                <li><Link to='/Aboutus'>About Us</Link></li>
                                <li><Link to='/'>Why us</Link></li>
                                <li><Link to='/Allproduct'>All Products</Link></li>
                                <li><Link to='/'>All Categories</Link></li>
                                <li><Link to='/Blogs'>Blogs</Link></li>
                                <li><Link to='/login'>Login/Sign Up</Link></li>
                                <li><Link className='nav-post-ads' to='/postads'>Post Ads</Link></li>
                            </ul>
                        </div>
                        <div className="small-nav">
                            <div class="dropdown">
                                <button className="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                    <li><Link className='dropdown-item' to='/'>Home</Link></li>
                                    <li><Link className='dropdown-item' to='/Aboutus'>About Us</Link></li>
                                    <li><Link className='dropdown-item' to='/'>Why us</Link></li>
                                    <li><Link className='dropdown-item' to='/Allproduct'>All Products</Link></li>
                                    <li><Link className='dropdown-item' to='/'>All Categories</Link></li>
                                    <li><Link className='dropdown-item' to='/Blogs'>Blogs</Link></li>
                                    <li><Link className='dropdown-item' to='/login'>Login/Sign Up</Link></li>
                                    <li><Link className='nav-post-ads  dropdown-item' to='/postads'>Post Ads</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </div >
        </div >
    );
};

export default Nav;