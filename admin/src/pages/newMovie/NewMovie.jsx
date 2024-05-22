import React, { useState } from 'react';
import './newMovie.scss';
import { storage } from "../../firebase";

const NewMovie = () => {
    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const handleChange = (e) => {
        const value = e.target.value
        setMovie({ ...movie, [e.target.name]: value });
    };

    const upload = (items) => {
        items.forEach((item) => {
            const uploadTask = storage.ref(`/items/${item.file.name}`).put(item);
            uploadTask.on("state_changes", snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            });
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();

        upload([
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgSm, label: "imgSm" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ])
    };

    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New Movie</h1>

            <form className="addProductForm">
                <div className="addProductItem">
                    <label for="img">Image</label>
                    <input id='img' type="file" name="img" onChange={(e) => setImg(e.target.files[0])} />
                </div>

                <div className="addProductItem">
                    <label for="imgTitle">Title Image</label>
                    <input id='imgTitle' type="file" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
                </div>

                <div className="addProductItem">
                    <label for="imgSm">Thumbnail Image</label>
                    <input id='imgSm' type="file" name="imgSm" onChange={(e) => setImgSm(e.target.files[0])} />
                </div>

                <div className="addProductItem">
                    <label for="movieTitle">Movie Title</label>
                    <input id='movieTitle' type="text" placeholder='Movie Title' name="title" onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label for="description">Description</label>
                    <input id='description' type="text" placeholder='Description' name="desc" onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label for="year">Year</label>
                    <input id='year' type="text" placeholder='Year' name="year" onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label for="genre">Genre</label>
                    <input id='genre' type="text" placeholder='Genre' name="genre" onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label for="duration">Duration</label>
                    <input id='duration' type="text" placeholder='Duration' name="duration" onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label for="limit">Limit</label>
                    <input id='limit' type="text" placeholder='Limit' name="limit" onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label for="isSeries">Is Series?</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>

                <div className="addProductItem">
                    <label for="trailer">Trailer</label>
                    <input id='trailer' type="file" name="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
                </div>

                <div className="addProductItem">
                    <label for="video">Video</label>
                    <input id='video' type="file" name="video" onChange={(e) => setVideo(e.target.files[0])} />
                </div>

                {uploaded === 5 ? (
                    <button className="addProductButton">Create</button>
                ) : (
                    <button className="addProductButton" onClick={handleUpload}>Upload</button>
                )}
            </form>
        </div>
    )
}

export default NewMovie