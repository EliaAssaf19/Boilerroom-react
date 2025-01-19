import React, { useState } from "react";
import Button from "./Button";

function ActivityForm({ addActivity }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !date || !location) return; // validering

        addActivity({ name, date, location});
        setName("");
        setDate("");
        setLocation("");
    };

    return (
        <form onSubmit= {handleSubmit}>
            <input
              type="text"
              placeholder="Aktivitetens namn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
              <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              />
              <input
              type="text"
              placeholder="Plats"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              />
               <Button type="submit">Lägg till aktivitet</Button>
              </form>
    );
}

export default ActivityForm; 