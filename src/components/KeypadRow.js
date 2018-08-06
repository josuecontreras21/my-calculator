import React from "react";

import Keypad from "./Keypad";

const KeypadRow = props => {
  return (
    <div className="row">
      <div className="col-12">
        <Keypad clickHandler={props.clickHandler} />
      </div>
    </div>
  );
};

export default KeypadRow;
