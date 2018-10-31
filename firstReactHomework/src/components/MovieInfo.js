import React from "react";
import { Poster } from "./Poster";

export const MovieInfo = (props) => {
    return (
        <div className="movie-info">
            <Poster data={props.data} />

            <h2>{props.data.movieName}</h2>
            <p>{props.data.description}</p>
            <p>{props.data.grade}</p>
        </div>
    )
}