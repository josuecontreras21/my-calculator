import React from "react";
import Button from "./Button";

const ButtonRow = props => {
  let { buttons, clickHandler } = props;
  const columns = buttons.map((button, i) => {
    return <Button key={i} button={button} clickHandler={clickHandler} />;
  });
  return <div className="row">{columns}</div>;
};

export default ButtonRow;
