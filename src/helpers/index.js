export function parseFloat(str) {
  return Number.parseFloat(str);
}

export function isNumber(str) {
  return /[+-]?([0-9]*[.])?[0-9]+/.test(str);
}
export function isNaN(num) {
  return Number.isNaN(num) ? 0 : num;
}
export function isOperation(str) {
  return /[/,*,\-,+]/.test(str);
}
export function evaluate(operation, display, memory) {
  return isNumber(memory) && isNumber(display) && isOperation(operation)
    ? // eslint-disable-next-line
      eval(`${memory} ${operation} ${display}`).toString()
    : "ERROR";
}
