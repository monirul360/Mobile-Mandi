import React from 'react';
import { Link } from 'react-router-dom';
import google from './../../Photo/icon/google.png';
import appstore from './../../Photo/icon/store.png';
import fb from './../../Photo/icon/facebook.png';
import twi from './../../Photo/icon/twitter.png';
import linkedin from "./../../Photo/icon/linkedin.png";
import ins from './../../Photo/icon/instagram.png'
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <h4>About Mobile Mandi</h4>
                            <ul>
                                <li><Link to='/Aboutus'>About Us</Link></li>
                                <li><Link to='/'>Careers</Link></li>
                                <li><Link to='/Terms'>Terms and Conditions</Link></li>
                                <li><Link to='/'>Privacy policy</Link></li>
                                <li><Link to='/'>Sitemap</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4>Help & Support</h4>
                            <ul>

                                <li><Link to='/Faq'>FAQ</Link></li>
                                <li><Link to='/'>Stay safe</Link></li>
                                <li><Link to='/Contactus'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to='/'>Sell Fast</Link></li>
                                <li><Link to='/'>Doorstep Delivery</Link></li>
                                <li><Link to='/'>Membership</Link></li>
                                <li><Link to='/'>Banner Ads</Link></li>
                                <li><Link to='/'>Ad Promotions</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4>Download Our App</h4>
                            <div className="d-flex">
                                <div className=''>
                                    <Link to='/'>
                                        <img className='img-fluid' src={google} alt="" />
                                    </Link>
                                </div>
                                <div className='ms-2'>
                                    <Link to='/'>
                                        <img className='img-fluid' src={appstore} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="social-icon">
                                <Link to=''>
                                    <img src={fb} alt="" />
                                </Link>
                                <Link to=''>
                                    <img src={twi} alt="" />
                                </Link>
                                <Link to=''>
                                    <img src={linkedin} alt="" />
                                </Link>
                                <Link to=''>
                                    <img src={ins} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container">
                <div className="copy-right">
                    <p>&copy; <span>Mobile Mandi</span> 2022. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;