import React from "react";
import ButtonRow from "./ButtonRow";
import buttonsArrays from "../buttonsList";

const KeyPad = props => {
  let { clickHandler } = props;
  let buttonRows = buttonsArrays.map((buttonsarray, i) => (
    <ButtonRow key={i} buttons={buttonsarray} clickHandler={clickHandler} />
  ));
  return buttonRows;
};

export default KeyPad;
