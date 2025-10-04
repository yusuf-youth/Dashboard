import React from "react";

function Box({ title, buttonTitle, buttonOnClick, modifierClass = "", children }) {
  return (
    <div className={`box ${modifierClass}`}>
      {title && (
        <header className="box__header">
          <h2 className="box__title">{title}</h2>
          {buttonTitle && <button className="box__button" onClick={buttonOnClick}>{buttonTitle}</button>}
        </header>
      )}
      <div className="box__body">{children}</div>
    </div>
  );
}

export default Box;
