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
    if (buttonName === 'AC') {
      return {
        total: null,
        next: null,
        operation: null,
        lastComputed: null,
      };
    }
    if (buttonName === '.') {
      return {
        total,
        next: `${next || '0'}${buttonName}`,
        operation,
        lastComputed,
      };
    }
    if (buttonName === '+/-') {
      return {
        total,
        next: `${next * -1}`,
        operation,
        lastComputed,
      };
    }
    if (buttonName === '%') {
      return {
        total,
        next: operate(next, null, buttonName),
        operation,
        lastComputed,
      };
    }
    if (buttonName === '=') {
      return {
        total: lastComputed !== '' ? operate(lastComputed, next, operation) : null,
        next: lastComputed === '' ? next : null,
        operation: null,
        lastComputed: '',
      };
    }
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
