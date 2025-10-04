import React from "react";

function InviteUser({ label, type="text", id, placeholder, buttonLabel }) {
  return (
    <div className="invite-user">
      <label className="invite-user__label" htmlFor={id}>
        {label}
      </label>
      <div className="invite-user__input-group">
        <input
          className="invite-user__input"
          type={type}
          id={id}
          name={label.toLowerCase()}
          placeholder={placeholder}
        />
        <button className="invite-user__button button">{buttonLabel}</button>
      </div>
    </div>
  );
}

export default InviteUser;
