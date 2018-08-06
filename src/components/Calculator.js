import React, { Component } from "react";

//import componets
import DisplayRow from "./DisplayRow";
import KeypadRow from "./KeypadRow";

import { isNumber } from "../helpers";
import * as methods from "./Calculator.methods";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      memory: "0",
      operation: "",
      needElement: true
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(button) {
    if (isNumber(button.text)) {
      methods.inputDigit(this, button);
    } else {
      switch (button.id) {
        case "clear":
          methods.clear(this);
          break;
        case "clearE":
          methods.clearE(this);
          break;
        case "toggleSign":
          methods.toggleSign(this);
          break;
        case "backspace":
          methods.backspace(this);
          break;
        case "decimal":
          methods.decimal(this);
          break;
        case "equals":
          methods.equals(this);
          break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
          methods.operate(this, button);
          break;
        default:
          return null;
      }
    }
  }
  render() {
    return (
      <div className="calculator container text-center">
        <DisplayRow display={this.state.display} />
        <KeypadRow clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default Calculator;
