import React from 'react';
import call from './../../Photo/icon/phone.png';
import email from './../../Photo/icon/send.png';
import location from './../../Photo/icon/location.png';
const Contactus = () => {
    return (
        <>
            <section className='contact-section common-border common-padding'>
                <div className="container">
                    <div className="contact">
                        <div className="intro">
                            <h2>Contact Us</h2>
                            <p> We Are is simply dummy text of the printi and typesetting indust tand ard dummy text ever since the</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-7">
                                <form action="">
                                    <input type="text" placeholder='Name' name="" id="" />
                                    <input type="email" placeholder='E-mail' name="" id="" />
                                    <input type="text" placeholder='Subject' name="" id="" />
                                    <textarea name="" placeholder='Product Discription'></textarea>
                                    <input type="submit" value="Send Message" />
                                </form>
                            </div>
                            <div className="col-md-12 col-lg-5">
                                {/*  Call Now*/}
                                <div className="d-flex align-items-center ms-5 my-3">
                                    <div className='img me-3'>
                                        <img src={call} alt="" />
                                    </div>
                                    <div>
                                        <p>Call Now</p>
                                        <h5>+25 5485 478 5478</h5>
                                    </div>
                                </div>
                                {/* E-mail */}
                                <div className="d-flex align-items-center ms-5  my-5">
                                    <div className='img me-3'>
                                        <img src={email} alt="" />
                                    </div>
                                    <div>
                                        <p>E-mail</p>
                                        <h5>example@gmail.com</h5>
                                    </div>
                                </div>
                                {/* Location */}
                                <div className="d-flex align-items-center ms-5 my-3">
                                    <div className='img me-3'>
                                        <img src={location} alt="" />
                                    </div>
                                    <div>
                                        <p>Location</p>
                                        <h5>25 Street Line 7584. <br />
                                            NY. USA 250489
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contactus;