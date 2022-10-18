import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <section className='form-section'>
                <div className="form-group">
                    <h2 className='text-center'>Create Your Account</h2>

                    <p>Provide your Mobile Number and Email ID to Register in Mobile Mandi.</p>
                    <div className="form-items">
                        <form action="">
                            <div className="d-flex">
                                <div>
                                    <input className='country-code' type="text" placeholder='+91' name="" id="" />
                                </div>
                                <div className='w-100'>
                                    <input type="number" name="" placeholder='Enter Your Mobile Number' id="" />
                                </div>
                            </div>
                            <input type="email" name="" placeholder='Your e-mail address' id="" />
                            <input type="text" name="" placeholder='Your location' id="" />
                            <input type="submit" value="Create Account" />
                        </form>
                        <p className='mt-3'>Member of Mobile Mandi?<Link style={{ color: '#000000' }} to='/login'> <b>Login Now</b></Link></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;