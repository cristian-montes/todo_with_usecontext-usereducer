import React from "react"
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
    const items = ['eggs', 'chorizo', 'beans']

    console.log('ITEMS', items)

    return(
        <div>
            <h3> List of To-Do's</h3>
            <div>
                {items.map((item) => (
                    <TodoItem
                item = {item}
                    />
                ))}
            </div>
        </div>

    );
}

export default TodoList;