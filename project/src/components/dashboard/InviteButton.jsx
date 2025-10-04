import React, { useContext } from "react";
import { AddPersonIcon } from "../../script/constants";
import { AppContext } from "../../context/AppContext";

function InviteButton() {
  const { setOverlayVisible, setInviteModalVisible } = useContext(AppContext);

  return (
    <button
      className="dashboard__button button"
      onClick={() => {
        setOverlayVisible(true);
        setInviteModalVisible(true);
      }}
    >
      <AddPersonIcon />
      Invite
    </button>
  );
}

export default InviteButton;
