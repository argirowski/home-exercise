import React from "react";
import { NavLink } from "react-router-dom";

export const Home = (props) => {
    return (
        <div id="home">
            <div className="centered">
                <h2>
                    Welcome {props.welcome}, To My React Gallery
                </h2>

                <NavLink to="/gallery">Check out The Gallery</NavLink>
            </div>
        </div>
    )
}