import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [maxId, setMaxId] = useState(5);

    const resetForm = () => {
        setMovieTitle("");
        setMovieYear("");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setMaxId(maxId + 1);
        addMovie(
            {
                id: maxId,
                title: movieTitle,
                year: movieYear
            }
        );
        resetForm();
    }


    return (
        <form onSubmit={onSubmit}>
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
        </form>
    );

};

export default MovieForm;