import React from 'react';
import MovieForm from '../components/MovieForm';

const PageMovies = ({ addMovie, renderMovies }) => {
    return (
        <div>
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie} />
            <br /><br />
            {renderMovies}
        </div>
    );
};

export default PageMovies;