import React from "react";

const Panel = ({
  title,
  icon,
  metaText,
  showActionButton = false,
  actionButtonText = "Add task",
  actionButtonIcon,
  modifierClass,
  onClick,
  children,
}) => {
  return (
    <div className={`panel ${modifierClass}`}>
      <header className="panel__header">
        <div className="panel__title-group">
          <h3 className="panel__title">
            {icon && <span className="panel__title-icon">{icon}</span>}
            {title}
          </h3>
          {metaText && <p className="panel__meta">{metaText}</p>}
        </div>

        {showActionButton && (
          <button className="panel__action-button" onClick={onClick}>
            {actionButtonIcon && (
              <span className="panel__action-icon">{actionButtonIcon}</span>
            )}
            {actionButtonText}
          </button>
        )}
      </header>

      <div className="panel__body">{children}</div>
    </div>
  );
};

export default Panel;
