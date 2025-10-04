import { TASK_DATA_GROUPS, TaskCompletedIcon } from "../../script/constants";
import Panel from "./Panel";
import TaskItem from "./TaskItem";

const TaskCompletedPanel = () => {
  return (
    <Panel title="Completed Task" icon={<TaskCompletedIcon />}>
      <ul className="panel__list panel__list--column">
        {TASK_DATA_GROUPS.completedList.map((item) => (
          <li className="panel__item" key={item.id}>
            <TaskItem {...item} />
          </li>
        ))}
      </ul>
    </Panel>
  );
};

export default TaskCompletedPanel;
