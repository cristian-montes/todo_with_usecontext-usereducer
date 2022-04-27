import { ADD_TODO, TOGGLE_TODO } from "./todo-actions";

const todoReducer = (state, action) => {
    switch(action.type){
        case ADD_TODO:
            return{};
        case TOGGLE_TODO:
            return{};
        default:
            return state;
    }
};

export default todoReducer;