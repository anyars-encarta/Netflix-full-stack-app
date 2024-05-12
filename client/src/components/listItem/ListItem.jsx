import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOffAltOutlined
} from '@mui/icons-material';
import './listItem.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListItem = ({ index, item }) => {
  const [hovered, setHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  const handleWatch = () => {
    navigate('/watch');
  };

  const getMovie = async () => {
    try {
      const res = await axios.get("/movies/find/" + item, {
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2Y1MTNhMTAxMmFhY2IwODY4MDM0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTUzMTY1OCwiZXhwIjoxNzE1OTYzNjU4fQ.1lJHxhyfroWFfnTQ4-OKMFGXjSOybWQMDySMmjMLtnY"
        },
      });

      setMovie(res.data);
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getMovie();
  }, [item])
  return (
    <div
      className='listItem'
      style={{ left: hovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleWatch}
    >
      <img
        src={movie.img}
        alt=""
      />

      {hovered && (
        <>
          {/* <video src={trailer} autoPlay={true} loop /> */}
          <video controls autoPlay loop>
            <source src={movie.trailer} type="video/mp4" />
          </video>

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpOffAltOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>

            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className='limit'>+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>

            <div className="desc">
              {movie.desc}
            </div>

            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem