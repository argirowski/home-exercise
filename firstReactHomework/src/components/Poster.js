import React from "react";

export const Poster = (props) => {
    return (
        <figure className="movie-poster">
            <img
                src={props.data.img}
                alt={props.data.movieName}
                width="200"
            />
        </figure>
    )
}