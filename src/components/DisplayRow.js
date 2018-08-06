import React from "react";

import Display from "./Display";

const DisplayRow = props => {
  return (
    <div className="row">
      <div className="col-12">
        <Display display={props.display} />
      </div>
    </div>
  );
};

export default DisplayRow;
