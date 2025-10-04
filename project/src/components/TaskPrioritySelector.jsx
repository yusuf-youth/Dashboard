import React, { useState } from "react";

function TaskPrioritySelector() {
  const [selectedPriority, setSelectedPriority] = useState("Moderate");

  const priorities = [
    { label: "Extreme", value: "Extreme", labelModifierClass: "priority-selector__label--extreme" },
    { label: "Moderate", value: "Moderate", labelModifierClass: "priority-selector__label--moderate" },
    { label: "Low", value: "Low", labelModifierClass: "priority-selector__label--low" },
  ];

  const onChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  return (
    <div className="priority-selector">
      <h3 className="priority-selector__title h4">Priority</h3>
      <div className="priority-selector__options">
        {priorities.map((priority) => (
          <div key={priority.value} className="priority-selector__option">
            <label
              className={`priority-selector__label ${priority.labelModifierClass}`}
              htmlFor={`priority-${priority.value}`}
            >
              {priority.label}
            </label>
            <input
              className="priority-selector__radio"
              type="radio"
              id={`priority-${priority.value}`}
              name="taskPriority"
              value={priority.value}
              checked={selectedPriority === priority.value}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskPrioritySelector;
