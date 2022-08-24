import React from 'react';

const Movie = (props) => {
    const { title, year } = props.movie;

    return (
        <div className='movie'>
            <div className='movie-title'>{title}</div>
            <div className='movie-year'>{year}</div>
        </div>
    );
};

export default Movie;