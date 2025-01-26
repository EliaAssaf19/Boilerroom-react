import React, { useEffect, useState } from "react";
import './App.css'
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm/ActivityForm";
import ActivityList from "./components/ActivityList";
import ItemAddedNotification from "./components/Notification/ItemAddedNotification";
import ItemDeletedNotification from "./components/Notification/ItemDeletedNotification";

function App() {
  const [activities, setActivities] = useState([]); //lagra listan av aktiviteter
  const [addNotificationVisible, setAddNotificationVisible] = useState(false);
  const [deleteNotificationVisible, setDeleteNotificationVisible] = useState(false);
  
  const addActivity = (activity) => { //lägga till en aktivitet till listan
  setActivities([...activities, activity]); //Uppdatera state genom att lägga till den nya aktiviteten
  
  setAddNotificationVisible(true); // Visa notis för tillagd aktivitet
};
 
  const deleteActivity = (indexToDelete) => {
    const updatedActivities = activities.filter((_, index) => index !== indexToDelete);
    setActivities(updatedActivities)
    setDeleteNotificationVisible(true); // visa notis för borttagen aktivitet
  }

  useEffect(() => {
    if (addNotificationVisible) {
      const timer = setTimeout (() => {
        setAddNotificationVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [addNotificationVisible]);

  useEffect(() => {
    if (deleteNotificationVisible) {
      const timer = setTimeout(() => {
        setDeleteNotificationVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [deleteNotificationVisible]);

  return (
    <div className="App">
      <Header></Header>
      <h1>Aktivitets Kalendern</h1>
      <ActivityForm addActivity={addActivity} /> {/* Rendera formuläret*/}
      <ActivityList activities={activities} deleteActivity={deleteActivity} /> {/* Rendera listan*/}
      {addNotificationVisible && <ItemAddedNotification />}
      {deleteNotificationVisible && <ItemDeletedNotification />}
    </div>
  );
}

export default App
