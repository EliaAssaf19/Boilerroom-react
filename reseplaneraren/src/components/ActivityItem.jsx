import React from "react";

function ActivityItem({ activity }) {
    return (
        <li>
            <h3>{activity.name}</h3>
            <p>{activity.date}</p>
            <p>{activity.location}</p>
        </li>
    );
}

export default ActivityItem;