import Movie from './components/Movie';


function App() {
  const movies = [
    { id: 1, title: 'kossie coder1', year: 2001 },
    { id: 2, title: 'kossie coder2', year: 2002 },
    { id: 3, title: 'kossie coder3', year: 2003 },
    { id: 4, title: 'kossie coder4', year: 2004 },
  ]

  const renderMovies = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />
  })

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div >
  );


}
export default App;
