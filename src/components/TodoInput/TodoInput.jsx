import React, { useState, useContext } from "react";
import todoContext from "../../context/todo-context";

function TodoInput(){
    const [todo, setTodo] =  useState("");
    const {addTodo} = useContext(todoContext)

    const onChangeHadler = (e) => {
      setTodo(e.target.value);
    };

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        const newTodo = {
            id: Math.random(),
            text: todo,
            complete: false
        }

        addTodo(newTodo)
        console.log(todo);

        setTodo("")
    }


    return(
        <div>
            <h3>TO-DO LIST W/ useCONTEXT and userREDUCER</h3>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    value={todo}
                    placeholder="Enter a To-Do..."
                    onChange={onChangeHadler}
                />
                <button>ADD</button>
            </form>
        </div>
    );
}

export default TodoInput;
