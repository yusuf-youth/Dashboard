import { MOCK_TASK_DATA, TASK_DATA_GROUPS } from "../script/constants";
import TaskItem from "../components/dashboard/TaskItem";
import Box from "../components/Box";
import TaskDetailView from "../components/TaskDetailView";

function VitalTask() {
  return (
    <div className="vital-tasks">
      <ul className="vital-tasks__list">
        <li className="vital-tasks__item">
          <Box title="Vital Tasks" modifierClass="vital-tasks__box">
            <ul className="box__list box__list--column">
              {TASK_DATA_GROUPS.vitalTasksList.map((item) => {
                return (
                  <li className="box__item" key={item.title}>
                    <TaskItem
                      key={item.key}
                      title={item.title}
                      description={item.description}
                      priority={item.priority}
                      status={item.status}
                      creationDate={item.creationDate}
                      image={item.image}
                      imageAlt={item.imageAlt}
                      isSelected={item.isSelected}
                    />
                  </li>
                );
              })}
            </ul>
          </Box>
        </li>
        <li className="vital-tasks__item">
          <TaskDetailView
            image={MOCK_TASK_DATA.vitalTask[0].image}
            title={MOCK_TASK_DATA.vitalTask[0].title}
            priority={MOCK_TASK_DATA.vitalTask[0].priority}
            status={MOCK_TASK_DATA.vitalTask[0].status}
            created={MOCK_TASK_DATA.vitalTask[0].created}
          >
            <div className="task-detail__notes task-detail__notes--vital-task">
              {MOCK_TASK_DATA.vitalTask[0].notes.map((note) => {
                return (
                  <p className="task-detail__note" key={note}>
                    {note}
                  </p>
                );
              })}
            </div>

            <ol className="task-detail__checklist">
              {MOCK_TASK_DATA.vitalTask[0].checklist.map((item) => {
                return (
                  <li className="task-detail__checklist-item" key={item}>
                    {item}
                  </li>
                );
              })}
            </ol>
          </TaskDetailView>
        </li>
      </ul>
    </div>
  );
}

export default VitalTask;
