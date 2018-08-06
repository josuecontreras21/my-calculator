import { evaluate } from "../helpers";

export function inputDigit(component, button) {
  component.setState((prevState, props) => {
    let { display } = prevState;
    let { text } = button;
    return {
      display: display === "0" ? text : display + text,
      needElement: false
    };
  });
}
export function clear(component) {
  component.setState({ display: "0", needElement: true });
}
export function clearE(component) {
  component.setState({
    display: "0",
    memory: "0",
    operation: "",
    needElement: true
  });
}
export function decimal(component) {
  component.setState((prevState, props) => {
    let { display } = prevState;
    if (display.indexOf(".") === -1) return { display: `${display}.` };
  });
}
export function backspace(component) {
  component.setState((prevState, props) => {
    let { display } = prevState;
    return display.length === 1 || (display.length === 2 && display[0] === "-")
      ? { display: "0" }
      : { display: display.slice(0, display.length - 1) };
  });
}
export function toggleSign(component) {
  component.setState((prevState, props) => {
    let { display } = prevState;
    if (display[0] !== "-" && display !== "0") {
      return { display: `-${display}` };
    } else if (display[0] === "-") {
      return { display: display.slice(1) };
    }
  });
}
export function operate(component, button) {
  if (!component.state.needElement && !component.state.operation) {
    component.setState((prevState, props) => {
      return {
        display: "0",
        memory: prevState.display,
        operation: button.text,
        needElement: true
      };
    });
  } else if (component.state.operation) {
    if (component.state.needElement) {
      component.setState({ operation: button.text });
    } else {
      //operate
      component.setState((prevState, props) => {
        let { operation, display, memory } = prevState;
        return {
          display: "0",
          memory: evaluate(operation, display, memory),
          operation: button.text,
          needElement: true
        };
      });
    }
  }
}
export function equals(component) {
  component.setState((prevState, props) => {
    let { needElement, operation, display, memory } = prevState;
    if (!needElement && operation) {
      return {
        display: evaluate(operation, display, memory),
        memory: "0",
        operation: "",
        needElement: false
      };
    }
  });
}
