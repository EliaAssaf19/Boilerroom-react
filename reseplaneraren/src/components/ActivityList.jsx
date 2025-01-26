import Button from "./Button";
import React from "react";
import ActivityItem from "./ActivityItem";

function ActivityList({ activities, deleteActivity }) {
    return (
        <ul>
            {activities.map((activity, index) => (
                <ActivityItem key={index} activity={activity} onDelete={() => deleteActivity(index)} />
            ))}
        </ul>    
    );
}
    
    
export default ActivityList;