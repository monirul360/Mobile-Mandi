import React from 'react';
import search from './../../Photo/Article/search.png';
const Search = () => {
    return (
        <>
            <section className='search-section'>
                <div className="container">
                    <div className="search">
                        <input type="text" name="" placeholder='What are you looking for?' id="" />
                        <button type='submit'>
                            <img src={search} alt="" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Search;