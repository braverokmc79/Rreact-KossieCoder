import Movie from './components/Movie';
import { useState } from 'react';
import MovieForm from './components/MovieForm';


function App() {

  const [movies, setMovies] = useState(
    [
      { id: 1, title: 'kossie coder1', year: 2001 },
      { id: 2, title: 'kossie coder2', year: 2002 },
      { id: 3, title: 'kossie coder3', year: 2003 },
      { id: 4, title: 'kossie coder4', year: 2004 },
    ]
  );


  const renderMovies = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />
  })

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  return (
    <div className="App">
      <h1>Movie list</h1>

      <MovieForm addMovie={addMovie} />

      <br /><br />
      {renderMovies}
    </div >
  );


}
export default App;
