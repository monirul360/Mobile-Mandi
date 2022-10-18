import React from 'react';

const Verify = () => {
    return (
        <>
            <section className='form-section'>
                <div className="form-group">
                    <h2 className='text-center'>Verify Your Account</h2>
                    <p>Verify with the Six digits OTP you have received to your Mobile Number. </p>
                    <div className="verify-items">
                        <form action="">
                            <input type="text" name="" id="" placeholder='1' />
                            <input type="text" name="" id="" placeholder='1' />
                            <input type="text" name="" id="" placeholder='1' />
                            <input type="text" name="" id="" placeholder='1' />
                            <input type="text" name="" id="" placeholder='1' />
                            <input type="text" name="" id="" placeholder='1' />
                            <input type="submit" value="Verify Account" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Verify;