import React, { useState } from 'react';
import MovieForm from '../components/MovieForm';
import Movie from './../components/Movie';

const Movies = () => {

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
        <div>
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie} />
            <br /><br />
            {renderMovies}
        </div>
    );
};

export default Movies;