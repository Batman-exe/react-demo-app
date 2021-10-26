import React from 'react';

export const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {
    return (
        <li key={todo.id} className='list-group-item'>
            <p onClick={() => handleToggle(todo)} class={todo.done}>
                {index + 1}. {todo.desc}
            </p>
            <button
                className='btn btn-danger'
                onClick={() => handleDelete(todo)}
            >
                Borrar
            </button>
        </li>
    );
};
