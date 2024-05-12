import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import List from "./components/list/List";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movies' element={<Home type='movies'/>} />
          <Route path='/series' element={<Home type='series'/>} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/watch' element={<Watch />} />
          <Route path='/lists' element={<List />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
