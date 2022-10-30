import React from 'react';
import user from './../../Photo/Profile/user.png';
import send from './../../Photo/icon/send.png';
import plus from './../../Photo/icon/sms/plus.png';
import icon_file from './../../Photo/icon/sms/icons_file.png';
import image from './../../Photo/icon/sms/image.png';
import Ads from '../../Component/Ads/Ads';
const Chat = () => {
    const person = [1, 2, 3, 4, 5];
    return (
        <>
            <section className='chat-section common-border common-padding'>
                <div className="chat">
                    <div className="row">
                        <div className="col-md-5">
                            <div>
                                <h3 className='title'>Message(02)</h3>
                                {/* chat-user start */}
                                {
                                    person.map(p =>
                                        <div className='chat-user d-flex align-items-center'>
                                            <div>
                                                <img src={user} alt="" />
                                            </div>
                                            <div>
                                                <h2>Johan Smith</h2>
                                                <p className='mb-0'>Active</p>
                                            </div>
                                        </div>

                                    )
                                }
                                {/* chat-user end */}
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sms">
                                <div className="sms-head d-flex align-items-center pt-3 pb-2">
                                    <div>
                                        <img src={user} alt="" />
                                    </div>
                                    <div>
                                        <h2>Johan Smith</h2>
                                        <p className='mb-0'>Active</p>
                                    </div>
                                </div>
                                {/* sms-body */}
                                <div className="sms-body">
                                    {/* sms you start*/}
                                    <div className='sms-you d-flex align-items-center'>
                                        <div>
                                            <img src={user} alt="" />
                                        </div>
                                        <div className='ms-3'>
                                            <p className='mb-0'>How can get your product?</p>
                                        </div>
                                    </div>
                                    {/* sms you end */}
                                    <div className='clearfix'>
                                    </div>
                                    {/* sms me start*/}
                                    <div className='sms-me d-flex align-items-center'>
                                        <div>
                                            <p className='mb-0'>I am Fine?</p>
                                        </div>
                                        <div className='ms-3'>
                                            <img src={user} alt="" />
                                        </div>
                                    </div>
                                    {/* sms me end*/}
                                    <div className='clearfix'>
                                    </div>
                                    {/* sms you start*/}
                                    <div className='sms-you d-flex align-items-center'>
                                        <div>
                                            <img src={user} alt="" />
                                        </div>
                                        <div className='ms-3'>
                                            <p className='mb-0'>How can get your product?</p>
                                        </div>
                                    </div>
                                    {/* sms you end */}
                                    <div className='clearfix'>
                                    </div>
                                    {/* sms me start*/}
                                    <div className='sms-me d-flex align-items-center'>
                                        <div>
                                            <p className='mb-0'>I am Fine?</p>
                                        </div>
                                        <div className='ms-3'>
                                            <img src={user} alt="" />
                                        </div>
                                    </div>
                                    {/* sms me end*/}
                                    <div className='clearfix'>
                                    </div>
                                    {/* sms you start*/}
                                    <div className='sms-you d-flex align-items-center'>
                                        <div>
                                            <img src={user} alt="" />
                                        </div>
                                        <div className='ms-3'>
                                            <p className='mb-0'>How can get your product?</p>
                                        </div>
                                    </div>
                                    {/* sms you end */}
                                    <div className='clearfix'>
                                    </div>
                                    {/* sms me start*/}
                                    <div className='sms-me d-flex align-items-center'>
                                        <div>
                                            <p className='mb-0'>I am Fine?</p>
                                        </div>
                                        <div className='ms-3'>
                                            <img src={user} alt="" />
                                        </div>
                                    </div>
                                    {/* sms me end*/}
                                    <div className='clearfix'>
                                    </div>
                                    {/* sms you start*/}
                                    <div className='sms-you d-flex align-items-center'>
                                        <div>
                                            <img src={user} alt="" />
                                        </div>
                                        <div className='ms-3'>
                                            <p className='mb-0'>How can get your product?</p>
                                        </div>
                                    </div>
                                    {/* sms you end */}
                                </div>
                                {/* sms-body end*/}
                                <div className="sms-footer">
                                    <div className="icon">
                                        <div>
                                            <img src={plus} alt="" />
                                            <img src={icon_file} alt="" />
                                            <img src={image} alt="" />
                                        </div>
                                    </div>
                                    <div className="form">
                                        <textarea placeholder='Write your message'></textarea>
                                        <button>
                                            <img src={send} alt="" />
                                        </button>
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

export default Chat;