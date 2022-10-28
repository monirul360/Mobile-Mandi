import React from 'react';
import hero from './../../Photo/Article/hero.png';
import article from './../../Photo/Article/post.png';
import location from './../../Photo/icon/location.png';
import user from './../../Photo/icon/user.png';
import Categories from './../../Component/Categories/Categories';
import Ads from '../../Component/Ads/Ads';
import whiteLocation from './../../Photo/icon/white-location.png';
import search from './../../Photo/icon/search.png';
import { Link } from 'react-router-dom';
const Home = () => {
    const post = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            <section>
                <div className="hero">
                    <div className="hero-content">
                        <div className='p-3'>
                            <h2>Now you can sell your farm products at your best price.</h2>
                            <p>Mobile Mandi is a one-stop platform for farmers to sell their produce at their price.</p>
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

                    <div className="hero-img">
                        <img className='img-fluid' src={hero} alt="" />
                    </div>
                </div>
            </section>
            <Categories></Categories>
            <section>
                <div className="recent-product">
                    <div className="container">
                        <div className="popular-article">
                            <h3 className='pb-5 pt-4 text-center'>Recent Listed Product</h3>
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
            </section>
            <section className='popular-product'>
                <div className="container">
                    <div className="popular-article">
                        <h3 className='pb-5 pt-4 text-center'>Popular Products of The Week</h3>
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
            </section>

            <Ads></Ads>

        </div >
    );
};

export default Home;