import React from 'react';

const Movie = ({ movie }) => {

    return (
        <div className='movie' id={movie.id}>
            <div className='movie-title'>{movie.title}</div>
            <div className='movie-year'>{movie.year}</div>
        </div>
    );
};

export default Movie;