import { useContext } from "react";
import {
  PlusIcon,
  TASK_DATA_GROUPS,
  TaskPendingIcon,
} from "../../script/constants";
import Panel from "./Panel";
import TaskItem from "./TaskItem";
import { AppContext } from "../../context/AppContext";

const getFormattedDate = () => {
  const date = new Date();
  const options = { day: "numeric", month: "long" };
  // Outputs "29 September"
  return date.toLocaleDateString("en-US", options);
};

const ToDoPanel = () => {
  const currentDate = getFormattedDate();
  const { setAddTaskModalVisible, setOverlayVisible } = useContext(AppContext);

  const metaTextContent = (
    <>
      <span className="panel__meta-item">{currentDate}</span>
      <span className="panel__meta-item panel__meta-item--today">• Today</span>
    </>
  );

  return (
    <Panel
      title="To-Do"
      modifierClass="panel--todo"
      icon={<TaskPendingIcon />}
      metaText={metaTextContent}
      showActionButton={true}
      actionButtonIcon={<PlusIcon />}
      actionButtonText="Add task"
      onClick={() => {
        setAddTaskModalVisible(true);
        setOverlayVisible(true);
      }}
    >
      <ul className="panel__list panel__list--column">
        {TASK_DATA_GROUPS.todoList.map((item) => (
          <li className="panel__item" key={item.id}>
            <TaskItem {...item} />
          </li>
        ))}
      </ul>
      <hr />
      <ul className="panel__list">
        {TASK_DATA_GROUPS.otherList.map((item) => (
          <li className="panel__item" key={item.id}>
            <TaskItem {...item} />
          </li>
        ))}
      </ul>
    </Panel>
  );
};

export default ToDoPanel;
