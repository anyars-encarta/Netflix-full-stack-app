import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import './list.scss'
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'

const List = ({ list }) => {
  const [moved, setMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  
  const listRef = useRef();

  const handleClick = (direction) => {
    setMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }

    if (direction === 'right' && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
    <div className='list'>
      <span className="listTitle">{list.title}</span>
      <div className="wrapper" >
        <ArrowBackIosOutlined
          className='sliderArrow left'
          onClick={() => handleClick('left')}
          style={{ display: !moved && 'none' }}
        />

        <div className="container" ref={listRef}>
          {list?.content?.map((item, i) => (
            <ListItem index={i} item={item} key={i}/>
          ))}
        </div>

        <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick('right')} />
      </div>
    </div>
  )
}

export default List