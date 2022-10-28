import React from 'react';
import group from './../../Photo/icon/Group.png';
const Categories = () => {
    const Categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    return (
        <section>
            <div className="Categories">
                <div className="container">
                    <h3 className='title'>Our Categories</h3>
                    <div className="Categories-items">
                        <div className="row d-flex justify-content-center align-items-center">
                            {
                                Categories.map(c =>

                                    <div className="col-4 col-md-4 col-lg-2">
                                        {/* items start */}
                                        <div className="items">
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <img className='img-fluid' src={group} alt="" />
                                                </div>
                                                <div className="content ms-3">
                                                    <h4>Flowers</h4>
                                                    <p>58 Products</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* items end */}
                                    </div>

                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;