import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Users from './pages/Users';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/users' element={<Users />}></Route>
        </Routes>
      </div>

    </div >
  );
}
export default App;
