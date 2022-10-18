import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='form-section'>
            <div className='container'>
                <div className="form-group">
                    <h2 className='text-center'>Login Now</h2>
                    <p>Use your Mobile Number to Login in Mobile </p>
                    <p>Mandi. Happy Selling!</p>
                    <div className="form-items">
                        <form action="">
                            <div className="d-flex">
                                <div>
                                    <input type="text" placeholder='+91' name="" id="" />
                                </div>
                                <div className='w-100'>
                                    <input type="number" name="" placeholder='Enter Your Mobile Number' id="" />
                                </div>
                            </div>
                            <input type="checkbox" name="" id="checkbox" />
                            <label class="form-check-label" for="checkbox">
                                Remember me
                            </label>
                            <input type="submit" value="Login Now" />
                        </form>
                        <p className='mt-3'>New in Mobile Mandi? <Link style={{ color: '#000000' }} to='/signup'> <b>Create Account</b></Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;