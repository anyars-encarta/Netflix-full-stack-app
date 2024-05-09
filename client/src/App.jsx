import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/watch' element={<Watch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
