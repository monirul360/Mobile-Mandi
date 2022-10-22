import React from 'react';
import Search from '../../Component/Search/Search';
import cover from './../../Photo/Profile/profile3.jpg';
import user from './../../Photo/Profile/user.png';
import article from './../../Photo/Article/Rectangle 20.png';
import location from './../../Photo/Article/Vector.png';
import leftarrow from './../../Photo/Varctor/left-arrow.png';
import rightarrow from './../../Photo/Varctor/right-arrow.png';
import { Link } from 'react-router-dom';
import Ads from '../../Component/Ads/Ads';
const Profile1 = () => {
    const post = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <Search></Search>

            <section className='profile1-section'>
                <div className="container">
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
                </div>
            </section>
            <section>
                <div className='we-found'>
                    <div className="container">
                        <div className="recent-product">
                            <div className="container">
                                <div className="popular-article">
                                    <h3 className='pb-5 pt-4 '>We Found 258 Rice ads</h3>
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