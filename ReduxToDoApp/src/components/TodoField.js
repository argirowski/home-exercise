import React from "react";

export class TodoField extends React.Component {
    render() {
        return (
            <div className="todo-creator">
                <form onSubmit={this.props.addTodo}>
                    <input
                        type="text"
                        placeholder="Write your todo here"
                        value={this.props.todoValue}
                        onChange={this.props.handleChange}
                    />
                    <button type="submit">+ Add todo</button>

                </form>
            </div>
        )
    }
}