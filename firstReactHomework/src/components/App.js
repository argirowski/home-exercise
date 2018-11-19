import React from "react";
import poster from "../assets/img/casino.jpg";
import { List } from "./List";

export class App extends React.Component {
    render() {

        let movieInfo = {
            movieName: "Casino ",
            description: "A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite.",
            grade: "*********",
            img: poster
        }

        let movieCast = {
            one: "Robert De Niro",
            two: "Sharon Stone",
            three: "Joe Pesci"
        }

        return (
            <div>

                <List
                    movieInfo={movieInfo}
                    movieCast={movieCast}
                />

            </div>
        )
    }
}