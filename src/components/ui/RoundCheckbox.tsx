import React, { useState } from "react";
import "../../styles/ui/RoundCheckbox.css";

const RoundCheckbox = ({ initialChecked = false, onChange }) => {
  const [checked, setChecked] = useState(initialChecked);

  const toggleCheckbox = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div
      className={`round-checkbox ${checked ? "checked" : ""}`}
      onClick={toggleCheckbox}
    >
      {checked && <div className="checkmark" />}
    </div>
  );
};

export default RoundCheckbox;
