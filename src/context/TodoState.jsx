import React, {useReducer} from 'react'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todo-actions'
import TodoContext from './todo-context'
import todoReducer from './todo-reducer'

const TodoState = (props) => {
    const initialState = {
        todos:[]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //ADD TODO
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    // TOGGLE A TODO
    const toggleTodo = (todoID) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoID
        })
    }

    //DELETE A TODO
    const deleteTodo = (todoID) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoID
        })
    }


  return (
    <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo
    }}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState