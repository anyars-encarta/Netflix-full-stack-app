import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';
import './home.scss';

const Home = ({ type }) => {
  return (
    <div className='homeContainer'>
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home