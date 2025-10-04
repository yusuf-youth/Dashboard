import React from "react";
import { USERS } from "../../script/constants";

function Users() {
  return (
    <div className="dashboard__users users">
      <ul className="users__list">
        {USERS.map((user) => (
          <li className="users__item" key={user.id}>
            <a className="users__link" href="#">
              <img
                className="users__image"
                src={user.image}
                width="36px"
                height="36px"
                alt=""
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
