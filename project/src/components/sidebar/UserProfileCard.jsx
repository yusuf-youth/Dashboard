import React from "react";

const UserProfileCard = ({
  name,
  email,
  avatarImage,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div
      className={`sidebar__user-profile-card user-profile-card`}
    >
      <div className="user-profile-card__avatar-container">
        <img
          className="user-profile-card__image"
          src={avatarImage}
          alt={`Avatar of ${name}`}
          width={`${imgWidth}px`}
          height={`${imgHeight}px`}
        />
      </div>
      <h3 className="user-profile-card__name">{name}</h3>
      <p className="user-profile-card__email">{email}</p>
    </div>
  );
};

export default UserProfileCard;
