import React, {useContext} from "react"
import TodoItem from "./TodoItem/TodoItem";
import todoContext from "../../context/todo-context";

const TodoList = () => {
   const {todos, toggleTodo,deleteTodo } = useContext(todoContext)

    return(
        <div>
            <h3> List of To-Do's</h3>
            <div>
                { todos.map( todo => (
                    <TodoItem 
                        text = {todo.text}
                    />
                ))

                }
            </div>
        </div>

    );
}

export default TodoList;