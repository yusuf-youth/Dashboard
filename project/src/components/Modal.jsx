import React from "react";
import Box from "./Box";
import Form from "./Form";
import Field from "./Field";

function Modal({ title, buttonOnClick, isSmall="", children }) {
  return (
    <Box
      modifierClass={`modal ${isSmall && 'modal--small'} box box--modal hidden-mobile`}
      title={title}
      buttonTitle="Go Back"
      buttonOnClick={buttonOnClick}
    >
      {children}
    </Box>
  );
}

export default Modal;
