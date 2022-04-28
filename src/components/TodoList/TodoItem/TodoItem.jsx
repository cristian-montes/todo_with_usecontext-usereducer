import React from "react";

const TodoItem = ({text}) => {
    return(
        <div>
            <span>{text}</span>
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