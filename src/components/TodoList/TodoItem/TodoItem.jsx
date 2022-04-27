import React from "react";

const TodoItem = ({item}) => {
    return(
        <div>
            <span>{item}</span>
            <button>
                TOGGLE
            </button>
            <button>
                DELETE
            </button>
        </div>
    )
}

export default TodoItem;