import React from "react";

const Movie = (props) => {

    const { movie, onClickMovie} = props;

    return (
        <div className="movie" onClick={onClickMovie}>
          <div className="square">
          {movie.poster_path ? (
                            <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image-film" />
                          ) : (
                            <img src='/NoImageLogo.png' alt='image-film' />
                          )}
            <div className="movie-name-overlay">{movie.title}</div>
          </div>
        </div>
      );
    };
    
    export default Movie;