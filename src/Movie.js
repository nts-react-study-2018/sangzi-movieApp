import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({title, poster, synopsis, genres}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} title={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {
                        genres.map((genre, index) => 
                            <MovieGenres genre={genre} key={index} />
                        )
                    }
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    genre_ids: PropTypes.array
}

function MoviePoster({poster, title}){
    return (
        <img src={poster} alt={title} title={title} className="Movie__Poster" />
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

function MovieGenres({genre}){
    return (
        <span className="Movie__Genre">{genre} </span> 
    )
}

export default Movie;