import React from "react";
import { MovieInfo } from "./MovieInfo";

export class List extends React.Component {
    render() {
        return (
            <div id="list">
                <MovieInfo data={this.props.movieInfo} />

                <ul className="actor-list">
                    <li>{this.props.movieCast.one}</li>
                    <li>{this.props.movieCast.two}</li>
                    <li>{this.props.movieCast.three}</li>

                </ul>

            </div>
        )
    }
}