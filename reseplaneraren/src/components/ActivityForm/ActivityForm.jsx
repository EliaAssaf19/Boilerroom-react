import { useState } from "react";
import Button from "../Button";
import NameInput from "./NameInput";
import DateInput from "./DateInput";
import LocationInput from "./LocationInput";


function ActivityForm({ addActivity }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !date || !location) return; // validering

        addActivity({ name, date, location});

         // Återställer fälten i formuläret efter "Submit"
        setName("");
        setDate("");
        setLocation("");
    };

    return (
        <form onSubmit= {handleSubmit}>
           <NameInput value={name} onChange={(e) => setName(e.target.value)} />
           <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
           <LocationInput value={location} onChange={(e) => setLocation(e.target.value)} />
               <Button type="submit">Lägg till aktivitet</Button>
              </form>
    );
}

export default ActivityForm; 