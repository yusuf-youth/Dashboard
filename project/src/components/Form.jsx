import React from "react";
import Field from "./Field";
import Button from "./Button";

function Form({
  primaryButtonTitle,
  secondaryButtonTitle,
  onPrimaryButtonClick,
  primaryButtonType = "submit",
  children,
}) {
  return (
    <form className="form">
      {children}

      <div className="form__actions">
        <Button
          className="form__button button"
          type={primaryButtonType}
          onClick={onPrimaryButtonClick}
        >
          {primaryButtonTitle}
        </Button>
        {secondaryButtonTitle && (
          <Button className="form__button">{secondaryButtonTitle}</Button>
        )}
      </div>
    </form>
  );
}

export default Form;
