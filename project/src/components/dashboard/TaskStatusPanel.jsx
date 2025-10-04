import { CHART_DATA, TaskStatusIcon } from "../../script/constants";
import Panel from "./Panel";
import StatusChart from "./StatusChart";

const TaskStatusPanel = () => {
  return (
    <Panel title="Task Status" icon={<TaskStatusIcon />}>
      <ul className="panel__list panel__list--status-charts">
        {CHART_DATA.map((item) => {
          return (
            <StatusChart
              key={item.status}
              percentage={item.percentage}
              label={item.label}
              status={item.status}
            />
          );
        })}
      </ul>
    </Panel>
  );
};

export default TaskStatusPanel;
