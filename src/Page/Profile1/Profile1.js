import React from 'react';
import Search from '../../Component/Search/Search';
import cover from './../../Photo/Profile/profile3.jpg';
import user from './../../Photo/Profile/user.png';
import article from './../../Photo/Article/post.png';
import location from './../../Photo/icon/location.png';
import leftarrow from './../../Photo/icon/left-arrow.png';
import rightarrow from './../../Photo/icon/right-arrow.png';
import { Link } from 'react-router-dom';
import Ads from '../../Component/Ads/Ads';
const Profile1 = () => {
    const post = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <Search></Search>

            <section className='profile1-section common-margin-top'>
                <div className="profile-content">
                    <img src={cover} alt="" />
                    <div className="change-cover">
                        <button>Change Cover Photo</button>
                    </div>
                    <div className="user d-flex justify-content-center align-items-center">
                        <div>
                            <img src={user} alt="" />
                        </div>
                        <div>
                            <h2>Johan Smith</h2>
                            <p>Vendor/buyer</p>
                        </div>
                    </div>
                    <div className="edit">
                        <button>Edit Profile</button>
                    </div>
                </div>
                <div className="intro">
                    <div className="link">
                        <Link id='profile-link' to='/Profile1'>Profile Info</Link>
                        <Link to='/Profile2'>Total Ads</Link>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='me-4'>
                                <label htmlFor="name"><p>Full Name</p></label>
                                <input type="text" name="" value="Johan Smith" id="name" />
                                <label htmlFor="Location"><p>Location</p></label>
                                <input type="text" name="" value="Delhi" id="Location" />
                                <label htmlFor="Account"><p>Full Name</p></label>
                                <input type="text" name="" value="Account Type" id="Account" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <label htmlFor="email"><p>E-mail Address</p></label>
                                <input type="text" name="" value="johan35@gmail.com" id="email" />
                                <label htmlFor="number"><p>Mobile Number</p></label>
                                <input type="text" name="" value="+91 254 2545 2452" id="number" />
                                <div className='upload'>
                                    <p className='mb-3'>Profile Photo</p>
                                    <button>Profile.JPG</button>
                                    <button>Upload New</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='we-found mt-5'>
                    <div className="container">
                        <div className="recent-product border-0">
                            <div className="container">
                                <div className="popular-article">
                                    <h3 className='pb-5 pt-0 '>We Found 258 Rice ads</h3>
                                    <div className="row">
                                        {
                                            post.map(popular =>

                                                <div className="col-md-6 col-lg-4">
                                                    <div className='items'>
                                                        <div className="img p-4">
                                                            <img className='img-fluid' src={article} alt="" />
                                                        </div>
                                                        <div className="content ps-4 ms-2">
                                                            <h2>6,000 Rs/-</h2>
                                                            <p>1 Bag of 300 Kgs</p>
                                                            <p>Masoor Dal Karnataka Bag</p>
                                                            <p>25 October 2021 - 2.30 PM</p>
                                                        </div>
                                                        <div className="footer">
                                                            <div className='d-flex justify-content justify-content-between m-4 mt-3 pb-4'>
                                                                <div className="user d-flex align-items-center">
                                                                    <div >
                                                                        <img className='user-img' src={user} alt="" />
                                                                    </div>
                                                                    <div className='ms-2'>
                                                                        <h4>by Jonib Smith</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="location">
                                                                        <img src={location} alt="" />
                                                                    </div>
                                                                    <div className='text'>
                                                                        <h4 className='ms-2'>Delhi</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='allproduct-pagination my-5 mt-4'>
                                <Link to='/'>
                                    <img src={leftarrow} alt="" />
                                </Link>
                                <Link to='/'>
                                    1
                                </Link>
                                <Link to='/'>
                                    2
                                </Link>
                                <Link to='/'>
                                    3
                                </Link>
                                <Link to='/'>
                                    <img src={rightarrow} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Ads></Ads>
        </>
    );
};

export default Profile1;