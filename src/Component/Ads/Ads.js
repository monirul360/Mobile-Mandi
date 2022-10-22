import React from 'react';
import { Link } from 'react-router-dom';

const Ads = () => {
    return (
        <>
            <section>
                <div className="post-ads">
                    <div className='post-content'>
                        <h1>You have Product For Sell?</h1>
                        <p>You have Product For Sell?
                            We Are is simply dummy text of the printi and typesetting industry the indust tand ard dummy text ever since the
                            Post Ads </p>
                        <Link to='/'>Post Ads</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ads;