import React, { useState } from "react";
import './App.css'
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="App">
      <Header></Header>
      <h1>Aktivitets Kalendern</h1>
      <ActivityForm addActivity={addActivity} />
      <ActivityList activities={activities} />
    </div>
    
  );
}

export default App
