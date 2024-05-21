import './movie.scss';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../constants/chartData';
import { Publish } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Movie = () => {
    const title = 'Downloads Performance';
    const location = useLocation();
    const pathname = location.pathname;
    const movieId = pathname.split('/').pop();
    const [movie, setMovie] = useState(location.state?.movie || null);

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
                        <input id='pname' type="text" placeholder={movie.title} />

                        <label for="year">Year</label>
                        <input id="year" type="text" placeholder={movie.year} />

                        <label for="genre">Genre</label>
                        <input id="genre" type="text" placeholder={movie.genre} />

                        <label for="limit">limit</label>
                        <input id="limit" type="text" placeholder={movie.limit} />

                        <label for="trailer">Trailer</label>
                        <input id="trailer" type="file" />

                        <label for="video">Video</label>
                        <input id="video" type="file" />
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} alt="" className="productUploadImage" />
                            <label for="file"><Publish className='productUpdateIcon' /></label>
                            <input id='file' type="file" style={{ display: 'none' }} />
                        </div>

                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Movie;