import operate from './operate';

const calculate = ({
  total, next, operation, lastComputed,
}, buttonName) => {
  const noDigits = ['AC', '.', '+/-', '%', '+', '-', 'X', '÷', '='];

  if (!noDigits.includes(buttonName)) {
    if (!operation) {
      return {
        total: null, next: `${next || ''}${buttonName}`, operation: null, lastComputed: '',
      };
    }
    if (operation && !total && lastComputed === '') {
      return {
        total: null, next: buttonName, operation, lastComputed: `${total || next}`,
      };
    }
    if (operation && total && lastComputed === '') {
      return {
        total: null, next: buttonName, operation, lastComputed: total,
      };
    }
    if (operation && !total && lastComputed !== '') {
      return {
        total: null, next: `${next || ''}${buttonName}`, operation, lastComputed,
      };
    }
  } else {
    if (!operation) {
      return {
        total: null, next, operation: buttonName, lastComputed: `${total || ''}`,
      };
    }
    if (operation) {
      return {
        total: operate(lastComputed, next, operation),
        next: null,
        operation: buttonName,
        lastComputed: '',
      };
    }
  }
  return {};
};
export default calculate;
