import React from "react";

export class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <ol>
                   {
                       this.props.todos.map((todo, i) => {
                           return (
                               <li key={i}>
                                   <h2>{todo}</h2>
                               </li>
                           )
                       })
                   }
                </ol>
            </div>
        )
    }
}