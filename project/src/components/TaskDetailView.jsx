import { NoteEditIcon, TrashIcon } from "../script/constants";
import IconButton from "./header/IconButton";

const TaskDetailView = ({
  image,
  title,
  priority,
  status,
  created,
  children,
}) => {
  let priorityClass;
  let statusClass;

  if (priority === "Extreme") {
    priorityClass = "task-detail__priority--extreme";
  }

  if (status === "Not Started") {
    statusClass = "task-detail__status--not-started";
  }

  return (
    <div className="task-detail box">
      <header className="task-detail__header">
        <img
          src={image}
          alt={`Visual for task: ${title}`}
          className="task-detail__image"
          width="160px"
          height="160px"
        />
        <div className="task-detail__info">
          <h3 className="task-detail__title">{title}</h3>

          <div className="task-detail__meta">
            <p className="task-detail__meta-line">
              Priority:
              <span className={`task-detail__priority ${priorityClass}`}>
                &nbsp;
                {priority}
              </span>
            </p>

            <p className="task-detail__meta-line">
              Status: &nbsp;
              <span className={`task-detail__status ${statusClass}`}>
                {status}
              </span>
            </p>

            <p className="task-detail__meta-line task-detail__meta-line--date">
              Created on: &nbsp;
              <span className="task-detail__date">{created}</span>
            </p>
          </div>
        </div>
      </header>

      <div className="task-detail__body">
        {children}

        <div className="task-detail__actions">
          <IconButton className="task-detail__button task-detail__button--delete">
            <TrashIcon />
          </IconButton>
          <IconButton className="task-detail__button task-detail__button--edit">
            <NoteEditIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailView;
