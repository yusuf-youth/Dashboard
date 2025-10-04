import React from "react";
import { CalendarIcon } from "../script/constants";

function Field({ label = "", icon, type = "text" }) {
  return (
    <div className="field">
      <label className="field__label" id={toCamelCaseId(label)}>
        {label}
      </label>
      <input
        className="field__input"
        type={type}
        id={toCamelCaseId(label)}
        name={label.toLowerCase()}
      />
      <button className="field__button">{icon}</button>
    </div>
  );
}

export default Field;

const toCamelCaseId = (label) => {
  if (!label) return "";

  // 1. Split the string by space
  const parts = label.toLowerCase().split(" ");

  // 2. Start with the first word (always lowercase)
  let result = parts[0] || "";

  // 3. Loop through the rest of the words and capitalize them
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (part.length > 0) {
      // Capitalize the first letter and append the rest
      result += part.charAt(0).toUpperCase() + part.slice(1);
    }
  }

  return result;
};
