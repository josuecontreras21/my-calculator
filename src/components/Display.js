import React from "react";

const Display = props => {
  let { display } = props;
  return (
    <div className="display float-right" id="display">
      <h1>{display}</h1>
    </div>
  );
};

export default Display;
