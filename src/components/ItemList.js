import React from 'react';
import "./ItemList.css";
import List from './List';


export default function ItemList({listItems, setListItems }) {
    return (
        <div className="itemList_container">
            <ul className="itemList">
                {listItems.map((item) => (
                    <List 
                        listItems={listItems}
                        setListItems={setListItems} 
                        item={item}
                        key={item.id} 
                        text={item.text} 
                    />
                ))}
            </ul>
        </div>
    )
}
