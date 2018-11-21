import React from "react";
import { connect } from "react-redux";

import { TodoList } from "./TodoList";
import { TodoField } from "./TodoField";

import { addTodo } from "../actions/TodoAction";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoValue: ""
        }

        this.handleTodoChange = this.handleTodoChange.bind(this);
    }

    handleTodoChange(e) {
        this.setState({
            todoValue: e.target.value
        })
    }

    render() {
        return (
            <div id="app">
                <div className="centered-content">
                    <TodoField 
                        handleChange={this.handleTodoChange}
                        todoValue={this.state.todoValue}
                        addTodo={(event) => this.props.addTodo(this.state.todoValue, event)}
                    />
                    <TodoList todos={this.props.todos} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.TodoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo, e) => {
            e.preventDefault();
            dispatch(addTodo(todo));
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);