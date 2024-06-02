import React from 'react'
import { ArrowBackOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Watch = () => {
  const movie = '/images/The Matrix Resurrections_Official Trailer 1.mp4';

  return (
    <div className='watch'>
      <Link to="/" className='link'>
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <video className="video" autoPlay progress="true" controls>
        <source src={movie} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Watch
