const initialState = {
    todos: ["Walk the dog", "Learn React", "Watch a movie"]
}

const TodoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    action.payload,
                    ...state.todos
                ]
            }
        default: return state;
    }
}

export default TodoReducer;