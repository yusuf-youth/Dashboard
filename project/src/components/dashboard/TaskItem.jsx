import React from "react";

// Utility function to get the status color class
const getStatusClass = (status) => {
  if (!status) return "task-item__status-indicator--red";

  switch (status.toLowerCase()) {
    case "completed":
      return "task-item__status-indicator--green";
    case "in progress":
      return "task-item__status-indicator--blue";
    case "not started":
    default:
      return "task-item__status-indicator--red";
  }
};

// Utility function to get the tag color class
const getTagColorClass = (value) => {
  if (!value) return "task-item__tag-text--gray";

  switch (value.toLowerCase()) {
    case "not started":
    case "high":
    case "extreme":
      return "task-item__tag-text--red";
    case "in progress":
    case "moderate":
      return "task-item__tag-text--blue";
    case "completed":
    case "low":
      return "task-item__tag-text--green";
    default:
      return "task-item__tag-text--gray";
  }
};

/**
 * Reusable Task Item component (Plain JavaScript React Component).
 * All props are received as an object and destructured.
 */
const TaskItem = ({
  title,
  description,
  priority,
  status,
  creationDate,
  image = null, // Default value if not provided
  imageAlt = "Task related image", // Default value if not provided
  isSelected
}) => {
  // Logic to determine BEM classes
  const statusIndicatorClass = getStatusClass(status);
  const priorityColorClass = getTagColorClass(priority);
  const statusColorClass = getTagColorClass(status);

  // Derive top-level modifier class based on status
  const taskItemModifier = status
    ? status.toLowerCase().replace(" ", "-")
    : "not-started";
  const taskItemClass = `task-item task-item--${taskItemModifier} ${isSelected ? 'task-item--selected' : null}`;

  return (
    <article className={taskItemClass}>
      <div className="task-item__body">
        <div
          className={`task-item__status-indicator ${statusIndicatorClass}`}
        ></div>

        <div className="task-item__text-content">
          <h4 className="task-item__title">{title}</h4>
          <p className="task-item__description">{description}</p>
        </div>

        {image && (
          <img
            className="task-item__image"
            src={image}
            alt={imageAlt}
            width="88px"
            height="88px"
          />
        )}
      </div>

      <footer className="task-item__meta">
        <div className="task-item__tag task-item__tag--priority">
          Priority:{" "}
          <span className={`task-item__tag-text ${priorityColorClass}`}>
            {priority}
          </span>
        </div>

        <div className="task-item__tag task-item__tag--status">
          Status:{" "}
          <span className={`task-item__tag-text ${statusColorClass}`}>
            {status}
          </span>
        </div>

        <div className="task-item__tag task-item__tag--creation-date">
          Created on:{" "}
          <span className="task-item__tag-text task-item__tag-text--gray">
            {creationDate}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default TaskItem;
