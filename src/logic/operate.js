import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = Big(numberOne).add(Big(numberTwo));
      break;
    case '-':
      result = Big(numberOne).minus(Big(numberTwo));
      break;
    case 'X':
      result = Big(numberOne).times(Big(numberTwo));
      break;
    case '÷':
      try {
        result = Big(numberOne).div(Big(numberTwo));
      } catch (error) {
        result = null;
      }
      break;
    case '%':
      result = Big(numberOne).div(Big(100));
      break;
    default:
      break;
  }
  return result ? result.toString() : result;
};
export default operate;
