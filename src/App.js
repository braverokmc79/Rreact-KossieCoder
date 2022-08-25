import Movie from './components/Movie';
import { useState } from 'react';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageMovies from './pages/PageMovies';
import Users from './pages/Users';

function App() {

  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  }
  const renderMovies = movies.length ? movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} removeMovie={removeMovie} />
  }) : "추가된 영화가 없습니다. ";


  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>}></Route>
          <Route path='/movies' element={<PageMovies addMovie={addMovie} renderMovies={renderMovies} />}></Route>
          <Route path='/users' element={<Users />}></Route>
        </Routes>
      </div>

    </div >
  );
}
export default App;
