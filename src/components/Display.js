import React from "react";

const Display = props => {
  let { display } = props;
  return (
    <div className="display float-right h1" id="display">
      {display}
    </div>
  );
};

export default Display;
