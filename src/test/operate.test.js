import operate from '../logic/operate';

test('Adding two numbers', () => {
  const result = operate('2', '5', '+');
  expect(result).toBe('7');
});

test('Subtracting two numbers', () => {
  const result = operate('2', '5', '-');
  expect(result).toBe('-3');
});

test('Multiplying two numbers', () => {
  const result = operate('2', '5', 'X');
  expect(result).toBe('10');
});

test('Dividing two numbers', () => {
  const result = operate('24', '3', '÷');
  expect(result).toBe('8');
});

test('Dividing two numbers that will have a decimal part', () => {
  const result = operate('24', '7', '÷');
  expect(result).toBe('3.42857142857142857143');
});

test('Dividing by 0', () => {
  const result = operate('24', '0', '÷');
  expect(result).toBe('division by zero error');
});

test('Percentage of a number', () => {
  const result = operate('53', null, '%');
  expect(result).toBe('0.53');
});
