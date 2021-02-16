import React from 'react';
import "./List.css"

export default function List({text, itemText, setItemText, listItems, setListItems, item}) {
    
    //Funcion para borrar el elemento de la lista
    const deleteHandler = () => {
        setListItems(listItems.filter(el => el.id !== item.id))
    };

    const completeHandler = () => {
        setListItems(listItems.map(item => {
            if (item.id === text.id) {
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="list">
            <li className="list_item">{text}</li>
            <button onClick={deleteHandler} className="list_button">Delete</button>
        </div>
    )
}
