import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOffAltOutlined
} from '@mui/icons-material';
import './listItem.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ index }) => {
  const [hovered, setHovered] = useState(false);
  const trailer = "https://vimeo.com/456293878";
  const navigate = useNavigate();

  const handleWatch = () => {
    navigate('/watch');
  };

  return (
    <div
      className='listItem'
      style={{ left: hovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleWatch}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />

      {hovered && (
        <>
          {/* <video src={trailer} autoPlay={true} loop /> */}
          <video controls autoPlay loop>
            <source src={trailer} type="video/mp4" />
          </video>

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpOffAltOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>

            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>

            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, ullam ipsa natus excepturi aliquam molestiae dolor
              quas numquam quasi
            </div>

            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem