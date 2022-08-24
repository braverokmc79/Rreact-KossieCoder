import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setMovieTitle("");
        setMovieYear("");
    }

    const resetError = () => {
        setTitleError("");
        setYearError("");
    }

    const validationForm = () => {
        resetError();
        let validated = true;
        if (!movieTitle) {
            setTitleError("영화제목을 입력해 주세요.");
            validated = false;
        }

        if (!movieYear) {
            setYearError("개봉년도를 입력해 주세요.");
            validated = false;
        }

        return validated;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (validationForm()) {
            addMovie(
                {
                    id: new Date(),
                    title: movieTitle,
                    year: movieYear
                }
            );
            resetError();
            resetForm();
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={movieTitle}
                placeholder='영화제목'
                onChange={e => setMovieTitle(e.target.value)}
            /><br />
            <div style={{ color: "red" }} >{titleError}</div>
            <input
                type="date"
                value={movieYear}
                placeholder='개봉년도'
                onChange={e => setMovieYear(e.target.value)}
            />
            <br /><div style={{ color: "red" }}> {yearError}</div >

            <br /><br />

            <button>영화추가</button>
        </form >
    );

};

export default MovieForm;