import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import List from "./components/list/List";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path='/' element={user ? <Home /> : <Register />} />
          <Route path='/register' element={!user ? <Register /> : <Home />} />
          <Route path='/login' element={!user ? <Login /> : <Register />} />

          {user &&
            <>
              <Route path='/movies' element={<Home type='movie' />} />
              <Route path='/series' element={<Home type='series' />} />
              <Route path='/watch' element={<Watch />} />
              <Route path='/lists' element={<List />} />
            </>
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
