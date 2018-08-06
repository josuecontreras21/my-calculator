import React from "react";

const styles = {
  lineHeight: 3,
  borderRadius: 0
};

const Button = props => {
  let { button, clickHandler } = props;
  let { text, id, color } = button;
  return (
    <div
      style={styles}
      className={`col-3 btn btn-${color ? color : "secondary"}`}
      id={id}
      onClick={() => {
        clickHandler(button);
      }}
    >
      {text}
    </div>
  );
};
export default Button;
