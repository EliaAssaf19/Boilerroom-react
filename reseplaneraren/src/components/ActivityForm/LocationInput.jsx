import React from "react";

const LocationInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Plats"
            value={value}
            onChange={onChange}
            required
        />
    );
};

export default LocationInput;