import { HandIcon } from "../script/constants";
import TaskCompletedPanel from "../components/dashboard/TaskCompletedPanel";
import Users from "../components/dashboard/Users";
import InviteButton from "../components/dashboard/InviteButton";
import ToDoPanel from "../components/dashboard/ToDoPanel";
import TaskStatusPanel from "../components/dashboard/TaskStatusPanel";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h2 className="dashboard__title h1">
          Welcome back, Sundar <HandIcon />
        </h2>

        <div className="dashboard__user-group">
          <Users />
          <InviteButton />
        </div>
      </header>
      <div className="dashboard__body">
        <ToDoPanel />
        <TaskStatusPanel />
        <TaskCompletedPanel />
      </div>
    </div>
  );
}

export default Dashboard;
