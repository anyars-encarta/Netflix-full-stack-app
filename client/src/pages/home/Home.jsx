import { useEffect, useState } from 'react';
import axios from 'axios';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import './home.scss';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState('')

  const getRandomLists = async () => {
    try {
      const res = await axios.get(
        `lists${type ? "?type=" + type : ''}${genre ? "&genre=" + genre : ''}`, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
      }
      )

      setLists(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='homeContainer'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists?.map((list) => (
        <List list={list} key={list._id} />
      ))}

    </div>
  )
}

export default Home