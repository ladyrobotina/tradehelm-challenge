import React from 'react';
import "./List.css"

export default function List({text, listItems, setListItems, item}) {
    
    //Funcion para borrar el elemento de la lista
    const deleteHandler = () => {
        setListItems(listItems.filter(el => el.id !== item.id))
    };

    return (
        <div className="list">
            <li className="list_item">{text}</li>
            <button onClick={deleteHandler} className="list_button">Delete</button>
        </div>
    )
}
