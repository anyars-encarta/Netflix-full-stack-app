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
        console.log("The data: ", res.data)
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

                <Link to='/newproduct'>
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
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label for="pname">Product Name</label>
                        <input id='pname' type="text" placeholder='HP Laptop' />

                        <label for="inStock">In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label for="active">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="/images/dell_desktop.jpg" alt="" className="productUploadImage" />
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