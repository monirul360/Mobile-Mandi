import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../Photo/Article/blog.png';
const Blogs = () => {
    const post = [1, 2, 3, 4, 5];
    return (
        <>
            <section className='blogs-section'>
                <div className="container">
                    <h3 className='pb-5 pt-4 text-center'>Home - Blogs</h3>

                    <div className="row d-flex justify-content-center">
                        {
                            post.map(post =>
                                <div className="col-md-6 col-lg-4">
                                    <Link to='/blogdetails'>
                                        <div className="blogs-items m-1">
                                            <div className="img">
                                                <img className='img-fluid' src={img} alt="" />
                                            </div>
                                            <div className="content">
                                                <h2>How Challenges Faced by the Farmers In India </h2>
                                                <p>Farming is quite an unpredictable business.Far
                                                    ers should meet the challenges such as soil erosion, inadequate rainfall</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;