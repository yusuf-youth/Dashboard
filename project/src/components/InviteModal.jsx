import React, { useContext } from "react";
import Modal from "./Modal";
import { AppContext } from "../context/AppContext";
import InviteUser from "./InviteUser";
import Members from "./Members";

function InviteModal() {
  const { setOverlayVisible, setInviteModalVisible } = useContext(AppContext);

  return (
    <Modal
      isSmall={true}
      title="Send an invite to a new member"
      buttonOnClick={() => {
        setOverlayVisible(false);
        setInviteModalVisible(false);
      }}
    >
      <div className="modal__body">
        <InviteUser
          label="Email"
          id="email"
          type="email"
          placeholder="neerajgurung99@gmail.com"
          buttonLabel="Send Invite"
        />
        <Members />
        <InviteUser
          label="Project Link"
          id="projectLink"
          placeholder="https://sharelinkhereandthere.com/34565yy29"
          buttonLabel="Copy Link"
        />
      </div>
    </Modal>
  );
}

export default InviteModal;
