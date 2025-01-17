import React from "react";
import ActivityItem from "./ActivityItem";

function ActivityList({ activities }) {
    return (
        <ul>
            {activities.map((activity, index) => (
                <ActivityItem key={index} activity={activity} />
            ))}
        </ul>
    );
}

export default ActivityList;