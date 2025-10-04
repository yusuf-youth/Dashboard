import { MOCK_TASK_DATA, TASK_DATA_GROUPS } from "../script/constants";
import TaskItem from "../components/dashboard/TaskItem";
import Box from "../components/Box";
import TaskDetailView from "../components/TaskDetailView";

function MyTask() {
  return (
    <div className="vital-tasks">
      <ul className="vital-tasks__list">
        <li className="vital-tasks__item">
          <Box title="My Tasks" modifierClass="vital-tasks__box">
            <ul className="box__list box__list--column">
              {TASK_DATA_GROUPS.myTasks.map((item) => {
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
            image={MOCK_TASK_DATA.myTasks.image}
            title={MOCK_TASK_DATA.myTasks.title}
            priority={MOCK_TASK_DATA.myTasks.priority}
            status={MOCK_TASK_DATA.myTasks.status}
            created={MOCK_TASK_DATA.myTasks.created}
          >
            <div className="task-detail__notes task-detail__notes--my-tasks">
              {MOCK_TASK_DATA.myTasks.sections.map((item) => {
                {
                  return item.text ? (
                    <p className="task-detail__note" key={item.title}>
                      <b>{item.title}: </b>
                      {item.text}
                    </p>
                  ) : (
                    <div key={item.title}>
                      <p className="task-detail__note">
                        <b>{item.title}: </b>
                      </p>
                      <ul>
                        {item.bulletPoints.map((bulletPoint) => {
                          return <li key={bulletPoint}>{bulletPoint}</li>;
                        })}
                      </ul>
                    </div>
                  );
                }
              })}
            </div>
          </TaskDetailView>
        </li>
      </ul>
    </div>
  );
}

export default MyTask;
