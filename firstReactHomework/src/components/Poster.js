import React from "react";

export const Poster = (props) => {
    return (
        <figure className="movie-poster">
            <img
                src={props.data.img}
                alt={props.data.movieName}
            />
        </figure>
    )
}