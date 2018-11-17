const initialState = {
    count: 1
}

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT" :
            return {
                ...state,
                count: state.count < 10 ? state.count += 1 : state.count
            }
        case "DECREMENT" :
            return {
                ...state,
                count: state.count > 1 ? state.count -= 1 : state.count
            }
        default: return state;
    }
}

export default countReducer;