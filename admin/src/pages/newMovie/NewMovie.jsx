import React from 'react';
import './newMovie.scss';

const NewMovie = () => {
    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New Movie</h1>

            <form className="addProductForm">
                <div className="addProductItem">
                    <label for="img">Image</label>
                    <input id='img' type="file" />
                </div>

                <div className="addProductItem">
                    <label for="imgTitle">Title Image</label>
                    <input id='imgTitle' type="file" />
                </div>

                <div className="addProductItem">
                    <label for="imgSm">Thumbnail Image</label>
                    <input id='imgSm' type="file" />
                </div>

                <div className="addProductItem">
                    <label for="movieTitle">Movie Title</label>
                    <input id='movieTitle' type="text" placeholder='Movie Title' />
                </div>

                <div className="addProductItem">
                    <label for="description">Description</label>
                    <input id='description' type="text" placeholder='Description' />
                </div>

                <div className="addProductItem">
                    <label for="year">Year</label>
                    <input id='year' type="text" placeholder='Year' />
                </div>

                <div className="addProductItem">
                    <label for="genre">Genre</label>
                    <input id='genre' type="text" placeholder='Genre' />
                </div>

                <div className="addProductItem">
                    <label for="duration">Duration</label>
                    <input id='duration' type="text" placeholder='Duration' />
                </div>

                <div className="addProductItem">
                    <label for="limit">Limit</label>
                    <input id='limit' type="text" placeholder='Limit' />
                </div>

                <div className="addProductItem">
                    <label for="isSeries">Is Series?</label>
                    <select name="isSeries" id="isSeries">
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>

                <div className="addProductItem">
                    <label for="trailer">Trailer</label>
                    <input id='trailer' type="file" />
                </div>

                <div className="addProductItem">
                    <label for="video">Video</label>
                    <input id='video' type="file" />
                </div>

                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewMovie