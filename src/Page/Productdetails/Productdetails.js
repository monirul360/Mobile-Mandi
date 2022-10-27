import React from 'react';
import { Link } from 'react-router-dom';
import Ads from '../../Component/Ads/Ads';
import article from './../../Photo/Article/Rectangle 20.png';
import location from './../../Photo/Article/Vector.png';
import user from './../../Photo/Article/Ellipse 12.png';
const Productdetails = () => {
    const post = [1, 2, 3];
    return (
        <>
            <section className='Productdetails section-padding'>
                <h2 className='page-tittle'>Home - Products - Product Details</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5">
                            <div className='Productdetails-ads-one mb-4'>
                                <h2>$12000</h2>
                                <p>Category : Rice Product</p>
                                <p>Ads ID : MM 1254852026</p>
                                <p className='text-end'>4 days ago</p>
                            </div>
                            <div className="Productdetails-ads-two mb-4">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h3>Seller Details</h3>
                                    <Link className='chat-link' to='/'>Chat with Seller</Link>
                                </div>
                                <div className='d-flex mt-4'>
                                    <div>
                                        <img className='user' src={user} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='user-name'>Jonib Smith</h2>
                                        <p className='user-title'>
                                            <img className='me-3' src={location} alt="" />
                                            Delhi
                                        </p>
                                        <div className='d-flex align-items-center'>
                                            <h4 className='me-5 ads-title'>5 Ads Published</h4>
                                            <Link to='/'>View Ads</Link>
                                        </div>
                                        <Link className='d-flex mt-2' to='/'>View Full Profile</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="Productdetails-location"></div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                            <div className='Productdetails-info'>
                                <img className='main img-fluid' src={article} alt="" />
                                <div className="img-gallery">
                                    <div>
                                        <img className='img-fluid' src={article} alt="" />
                                    </div>
                                    <div>
                                        <img className='img-fluid' src={article} alt="" />
                                    </div>
                                    <div>
                                        <img className='img-fluid' src={article} alt="" />
                                    </div>
                                    <div>
                                        <img className='img-fluid' src={article} alt="" />
                                    </div>
                                    <div>
                                        <img className='img-fluid' src={article} alt="" />
                                    </div>
                                </div>
                                <div className='rice-seed'>
                                    <h4>Rice Seed</h4>
                                    <p className='mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                    </p>
                                    <p>  and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the</p>
                                    <p className='date'>25 October 2021 - 2.30 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-5'>
                <div className="recent-product border-0">
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
            <Ads></Ads>
        </>
    );
};

export default Productdetails;