import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/CountAction";
import './App.css';

export class App extends React.Component {



    render() {
        return (
            <div>
                <button className = "decrease" onClick={this.props.namali.bind(this)}>-</button>
                <h2>{this.props.count}</h2>
                <button className = "increase" onClick={this.props.zgolemi.bind(this)}>+</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.countReducer.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        zgolemi: () => {
            dispatch(increment());
        },
        namali: () => {
            dispatch(decrement());
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);