import React from "react";
import { ArrowDownIcon, MEMBERS_DATA } from "../script/constants";

function Members() {
  return (
    <div className="members">
      <h3 className="members__title">Members</h3>
      <ul className="members__list">
        {MEMBERS_DATA.map((member) => {
          return (
            <li className="members__item" key={member.id}>
              <div className="members__person">
                <img
                  className="members__avatar"
                  src={member.avatarImage}
                  alt=""
                  width="45px"
                  height="45px"
                />
                <div className="members__details">
                  <h4 className="members__name">{member.name}</h4>
                  <span className="members__email">{member.email}</span>
                </div>
              </div>
              <button className="members__dropdown-button">
                {member.currentRole}
                <ArrowDownIcon />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Members;
