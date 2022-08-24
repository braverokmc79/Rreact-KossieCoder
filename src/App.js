import Movie from './components/Movie';
import { useState } from 'react';


function App() {

  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [maxId, setMaxId] = useState(5);


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

  const addMovie = (event) => {
    setMaxId(maxId + 1);

    event.preventDefault();

    setMovies([...movies, {
      id: maxId,
      title: movieTitle,
      year: movieYear
    }])

  }

  return (
    <div className="App">
      <h1>Movie list</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder='영화제목'
          onChange={e => setMovieTitle(e.target.value)}
        /><br />
        <input
          type="text"
          value={movieYear}
          placeholder='개봉년도'
          onChange={e => setMovieYear(e.target.value)}
        /><br /><br />

        <button>영화추가</button>
      </form><br /><br />
      {renderMovies}
    </div >
  );


}
export default App;
