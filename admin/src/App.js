// App.js
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
import Login from './pages/login/Login';
import Lists from "./pages/lists/Lists";
import SingleList from "./pages/singleList/SingleList";
import NewList from "./pages/newList/NewList";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

const App = () => {

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/newUser' element={<NewUser />} />

        {/* Protected routes */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <>
                <Topbar />
                <div className='container'>
                  <Sidebar />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/users' element={<UserList />} />
                    <Route path='/user/:userId' element={<User />} />
                    <Route path='/movies' element={<MovieList />} />
                    <Route path='/movie/:movieId' element={<Movie />} />
                    <Route path='/newMovie' element={<NewMovie />} />
                    <Route path='/lists' element={<Lists />} />
                    <Route path='/list/:listId' element={<SingleList />} />
                    <Route path='/newList' element={<NewList />} />
                  </Routes>
                </div>
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
