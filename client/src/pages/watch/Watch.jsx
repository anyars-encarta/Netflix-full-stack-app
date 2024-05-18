// Watch.jsx
import { ArrowBackOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import './watch.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Watch = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get('movieId');
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    try {
      const res = await axios.get("/movies/find/" + movieId, {
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2Y1MTNhMTAxMmFhY2IwODY4MDM0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjAyNDYwMCwiZXhwIjoxNzE2NDU2NjAwfQ.rBeS1HDXljBTqgO6lSxIOxi_kRDMMY-zmpSXzGOGu6Y"
        },
      });

      setMovie(res.data);
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getMovie();
  }, [movieId]);

  return (
    <div className='watch'>
      <Link to="/" className='link'>
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <video className="video" autoPlay progress="true" controls>
        <source src={movie && movie.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Watch;