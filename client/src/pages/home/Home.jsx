import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import './home.scss';
import { useEffect, useState } from 'react';

const Home = ({ type }) => {
  const [lists, setLists] =useState([]);

  const getRandomLists = async () => {
    try {
      
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRandomLists();
  }, []);

  return (
    <div className='homeContainer'>
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home