import React from 'react';
import Sitebar from '../../Component/Allproduct/Sitebar';
import article from './../../Photo/Article/post.png';
import user from './../../Photo/icon/user.png';
import location from './../../Photo/icon/location.png';
import whiteLocation from './../../Photo/icon/white-location.png';
import search from './../../Photo/icon/search.png';
import leftarrow from './../../Photo/icon/left-arrow.png';
import rightarrow from './../../Photo/icon/right-arrow.png';
import { Link } from 'react-router-dom';
import Ads from '../../Component/Ads/Ads';
const Allproduct = () => {
    const post = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
    return (
        <>
            <section className='allproduct-hero-section'>
                <div className="container">
                    <div className="hero-content">
                        <div className='mx-4'>
                            <h2>258 Rice Ads</h2>
                            <p>We Are is simply dummy text of the printi and typesetting industry the indust tand ard dummy text ever since the</p>
                        </div>
                        <div className="hero-form">
                            <input type="text" name="" placeholder='What are you looking for?' id="" />
                            <button type='submit'>
                                <img src={search} alt="" />
                            </button>
                        </div>
                        <Link to='/'>
                            <span className='me-2'>
                                <img src={whiteLocation} alt="" />
                            </span>
                            Select Your Place
                        </Link>
                    </div>
                </div>
            </section>

            <section className="allproduct-section common-padding">
                <div className="container">
                    <h2 className='page-tittle'>We Found 258 Rice ads</h2>
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <Sitebar></Sitebar>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="recent-product pt-0 border-0">
                                <div className="container">
                                    <div className="popular-article">
                                        <div className="row">
                                            {
                                                post.map(popular =>

                                                    <div className="col-md-6 col-lg-6">
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
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='allproduct-pagination pt-5'>
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
                    </div>
                </div>
            </section>
            <Ads></Ads>
        </>
    );
};

export default Allproduct;