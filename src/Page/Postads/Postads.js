import React from 'react';

const Postads = () => {
    return (
        <>
            <section className='form-section'>
                <div className="form-group">
                    <h2 className='text-center'>List Products for Sale</h2>
                    <p>We Are is simply dummy text of the printi and typesetting
                        indust tand ard dummy text ever since the</p>
                    <div className="postads">
                        <form action="">
                            <input type="text" name="" placeholder='Provide the Title' id="" />
                            <textarea name="" id="" placeholder='Description '></textarea>
                            <input type="text" name="" placeholder='Your location' id="" />
                            <input type="text" name="" placeholder='Product Price' id="" />
                            <input type="file" name="" id="" />
                            <input type="submit" value="Publish Ads" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Postads;