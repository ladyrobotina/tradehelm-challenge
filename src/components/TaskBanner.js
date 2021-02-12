// aqui vamos a hacer el banner de la lista
import React from "react";

export const TaskBanner = props => (
    <div>
        <h1 className="text-black text-center p-4">
            Supermarket list
        </h1>
        <p className="text-black text-center p-2">{props.taskItems.filter(t => !t.done).length}{" "}item(s)</p>
    </div>
);