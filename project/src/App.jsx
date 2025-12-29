import Header from "./components/sections/Header";
import Sidebar from "./components/sections/Sidebar";
import Content from "./components/sections/Content";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import AddTaskModal from "./components/AddTaskModal";
import InviteModal from "./components/InviteModal";

function App() {
  const { isOverlayVisible, isAddTaskModalVisible, isInviteModalVisible } =
    useContext(AppContext);

  return (
    <div className="App">
      <h1 className="visually-hidden">Dashboard</h1>
      {/* <Header /> */}
      <main className="main">
        <Sidebar />
        <Content />
      </main>

      {isOverlayVisible && <div className="overlay hidden-mobile"></div>}
      {isAddTaskModalVisible && <AddTaskModal />}
      {isInviteModalVisible && <InviteModal />}
    </div>
  );
}

export default App;
