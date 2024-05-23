import './movie.scss';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../constants/chartData';
import { Publish } from '@mui/icons-material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { updateMovie } from '../../context/movieContext/apiCalls';

const Movie = () => {
    const title = 'Downloads Performance';
    const location = useLocation();
    const pathname = location.pathname;
    const movieId = pathname.split('/').pop();
    const [movie, setMovie] = useState(location.state?.movie || null);

    // const [movie, setMovie] = useState({});
    // const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    // const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);
    const { dispatch } = useContext(MovieContext);

    const fetchMovieById = async (movieId) => {
        try {
            const res = await axios.get(`http://localhost:8800/api/movies/find/${movieId}`, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });

        return res.data;
        
        } catch (e) {
            console.log(e);
        } 
    }

    useEffect(() => {
        if (!movie) {
            fetchMovieById(movieId).then(fetchedMovie => setMovie(fetchedMovie));
        }
    }, [movieId, movie]);
    



//UPDATE STARTS HERE
    const handleChange = (e) => {
        const value = e.target.value
        setMovie({ ...movie, [e.target.name]: value });
    };

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = item.file?.name;
            const storageRef = ref(storage, `/items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    console.log("Upload is " + progress + "% complete...");
                },
                (err) => {
                    console.error(err)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setMovie((prev) => {
                            return { ...prev, [item.label]: url };
                        });
                        setUploaded((prev) => prev + 1);
                    });
                }
            );
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


    const handleUpdate = (e) => {
        e.preventDefault();

        handleUpload();
        updateMovie(movie, dispatch);
    };
//UPDATE ENDS HERE

    if (!movie) {
        return <div />;
    }
    
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>

                <Link to='/newMovie'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title={title} data={productData} xDataKey='name' dataKey='Sales' />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={movie.img} alt="" className="productInfoImage" />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Limit:&nbsp;</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label for="pname">Movie Title</label>
                        <input id='pname' type="text" value={movie.title} onChange={handleChange} />

                        <label for="year">Year</label>
                        <input id="year" type="text" value={movie.year} onChange={handleChange} />

                        <label for="genre">Genre</label>
                        <input id="genre" type="text" value={movie.genre} onChange={handleChange} />

                        <label for="limit">limit</label>
                        <input id="limit" type="text" value={movie.limit} onChange={handleChange} />

                        <label for="trailer">Trailer</label>
                        <input id="trailer" type="file" onChange={(e) => setTrailer(e.target.files[0])} />

                        <label for="video">Video</label>
                        <input id="video" type="file" onChange={(e) => setVideo(e.target.files[0])} />
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} alt="" className="productUploadImage" />
                            <label for="file"><Publish className='productUpdateIcon' /></label>
                            <input id='file' type="file" style={{ display: 'none' }} onChange={(e) => setImgTitle(e.target.files[0])} />
                        </div>

                        <button className="productButton" onClick={() => handleUpdate(movieId)}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Movie;