import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Modal from "./Modal";
import Form from "./Form";
import Field from "./Field";
import { CalendarIcon } from "../script/constants";
import TaskPrioritySelector from "./TaskPrioritySelector";

function AddTaskModal() {
  const { setAddTaskModalVisible, setOverlayVisible } = useContext(AppContext);

  return (
    <Modal
      title={"Add New Task"}
      buttonOnClick={() => {
        setAddTaskModalVisible(false);
        setOverlayVisible(false);
      }}
    >
      <Form
        primaryButtonTitle="Cancel"
        primaryButtonType="button"
        onPrimaryButtonClick={() => {
          setOverlayVisible(false);
          setAddTaskModalVisible(false);
        }}
      >
        {formFields.map((field) => {
          return (
            <Field
              key={field.label}
              label={field.label}
              icon={field?.hasIcon}
            />
          );
        })}
        <TaskPrioritySelector />
        <div className="task-form">
          <div className="task-form__item">
            <h3 className="task-form__label h4">Task Description</h3>
            <textarea
              className="task-form__description"
              name=""
              id=""
              placeholder="Start writing here....."
            ></textarea>
          </div>
          <div className="task-form__item">
            <h3 className="task-form__label h4">Upload Image</h3>
            <div className="task-form__upload-box">
              <img
                className="task-form__image"
                src="public/images/image-placeholder.png"
                alt=""
                width="60px"
                height="60px"
              />
              <div className="task-form__prompt">
                <span className="task-form__prompt-text">
                  Drag&Drop files here
                </span>
                <span className="task-form__prompt-text">or</span>
                <button className="task-form__button" type="button">
                  Browse
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Modal>
  );
}

export default AddTaskModal;

const formFields = [
  {
    label: "Title",
  },
  {
    label: "Date",
    hasIcon: <CalendarIcon />,
  },
];
