import { useEffect, useState } from 'react';
import Movie from './components/Movie';


function App() {
  const movies = [
    { id: 1, title: 'kossie coder1', year: 2001 },
    { id: 2, title: 'kossie coder2', year: 2002 },
    { id: 3, title: 'kossie coder3', year: 2003 },
  ]

  const renderMovies = movies.map((movie) => {
    return (
      <div className='movie' key={movie.id}>
        <div className='movie-title'>{movie.title}</div>
        <div className='movie-year'>{movie.year}</div>
      </div >
    );
  })


  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
      {/* {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />
      })} */}

    </div >
  );


}
export default App;
