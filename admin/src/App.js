import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.scss';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";

const App = () => {
  return (
    <Router>
      <Topbar />

      <div className='container'>
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/movie/:movieId' element={<Movie />} />
          <Route path='/newMovie' element={<NewMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
