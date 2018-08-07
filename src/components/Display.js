import React from "react";

const Display = props => {
  let { display } = props;
  return (
    <div className="display float-right" id="display">
      {display}
    </div>
  );
};

export default Display;
