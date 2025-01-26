import React from "react";

const NameInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Aktivitetens namn"
            value={value}
            onChange={onChange}
            required
        />
    );
};

export default NameInput;