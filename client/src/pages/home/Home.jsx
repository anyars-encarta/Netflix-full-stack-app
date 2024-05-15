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
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2Y1MTNhMTAxMmFhY2IwODY4MDM0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTUzMTY1OCwiZXhwIjoxNzE1OTYzNjU4fQ.1lJHxhyfroWFfnTQ4-OKMFGXjSOybWQMDySMmjMLtnY"
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
      <Featured type={type} />
      {lists?.map((list) => (
        <List list={list} key={list._id} />
      ))}

    </div>
  )
}

export default Home