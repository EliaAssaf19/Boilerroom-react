import React from "react";
import { useState } from "react";
import './App.css'
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";


function App() {
  //lagra listan av aktiviteter
  const [activities, setActivities] = useState([]);
console.log(activities)
  //lägga till en aktivitet till listan
  const addActivity = (activity) => {
  //Uppdatera state genom att lägga till den nya aktiviteten
    setActivities([...activities, activity]);
  };
 
  const deleteActivity = (indexToDelete) => {
    const updatedActivities = activities.filter((_, index) => index !== indexToDelete);
    setActivities(updatedActivities)
  }

  return (
    <div className="App">
      <Header></Header>
      <h1>Aktivitets Kalendern</h1>
      <ActivityForm addActivity={addActivity} />
      {/* Rendera formuläret*/}
      <ActivityList activities={activities} deleteActivity={deleteActivity} />
       {/* Rendera listan*/}
    </div>
    
  );
}

export default App
