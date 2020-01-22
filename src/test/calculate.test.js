import calculate from '../logic/calculate';


test('Initial state of calculator and buttonName is a Number', () => {
  const calculatorObject = { total: null, next: null, operation: null };
  const result = calculate(calculatorObject, '5');
  expect(result).toEqual({ total: null, next: '5', operation: null });
});

test('Two number buttons  in a row', () => {
  const calculatorObject = { total: null, next: null, operation: null };
  const firstNumber = calculate(calculatorObject, '5');
  const result = calculate(firstNumber, '3');
  expect(result).toEqual({ total: null, next: '53', operation: null });
});

test.only('Two number buttons  in a row and then a addition button', () => {
  const calculatorObject = { total: null, next: '48', operation: null };
  const result = calculate(calculatorObject, '+');
  expect(result).toEqual({ total: null, next: '48', operation: '+' });
});

test.todo('Calculating AC operation');
test.todo('Calculating Equals Operation');
test.todo('Adding decimal part using dot');
test.todo('Calculating Addition');
test.todo('Calculating Subtraction');
