import React from "react";
import Button from "./Button";

function ActivityItem({ activity, onDelete }) {
    return (
        <li>
            <h3>{activity.name}</h3>
            <p>{activity.date}</p>
            <p>{activity.location}</p>
            <Button onClick={onDelete}>Ta Bort</Button>
        </li>
    );
}

export default ActivityItem;