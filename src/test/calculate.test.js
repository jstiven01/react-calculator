import calculate from '../logic/calculate';


test('Initial state of calculator and buttonName is a Number', () => {
  const calculatorObject = {
    total: null, next: null, operation: null, lastComputed: '',
  };
  const result = calculate(calculatorObject, '5');
  expect(result).toEqual({
    total: null, next: '5', operation: null, lastComputed: '',
  });
});

test('Two number buttons  in a row', () => {
  const calculatorObject = {
    total: null, next: null, operation: null, lastComputed: '',
  };
  const firstNumber = calculate(calculatorObject, '5');
  const result = calculate(firstNumber, '3');
  expect(result).toEqual({
    total: null, next: '53', operation: null, lastComputed: '',
  });
});

test('Two number buttons  in a row and then an addition button', () => {
  const calculatorObject = {
    total: null, next: '48', operation: null, lastComputed: '',
  };
  const result = calculate(calculatorObject, '+');
  expect(result).toEqual({
    total: null, next: '48', operation: '+', lastComputed: '',
  });
});

test('Two number buttons  in a row, an addition button and then a number button', () => {
  const calculatorObject = {
    total: null, next: '48', operation: '+', lastComputed: '',
  };
  const result = calculate(calculatorObject, '5');
  expect(result).toEqual({
    total: null, next: '5', operation: '+', lastComputed: '48',
  });
});


test('Rendering the next operation 5 - 3 + 7 - 10 + ', () => {
  const calculatorObject = {
    total: null, next: null, operation: null, lastComputed: '',
  };
  const result1 = calculate(calculatorObject, '5');
  expect(result1).toEqual({
    total: null, next: '5', operation: null, lastComputed: '',
  });

  const result2 = calculate(result1, '-');
  expect(result2).toEqual({
    total: null, next: '5', operation: '-', lastComputed: '',
  });

  const result3 = calculate(result2, '3');
  expect(result3).toEqual({
    total: null, next: '3', operation: '-', lastComputed: '5',
  });

  const result4 = calculate(result3, '+');
  expect(result4).toEqual({
    total: '2', next: null, operation: '+', lastComputed: '',
  });

  const result5 = calculate(result4, '7');
  expect(result5).toEqual({
    total: null, next: '7', operation: '+', lastComputed: '2',
  });

  const result6 = calculate(result5, '-');
  expect(result6).toEqual({
    total: '9', next: null, operation: '-', lastComputed: '',
  });

  const result7 = calculate(result6, '1');
  expect(result7).toEqual({
    total: null, next: '1', operation: '-', lastComputed: '9',
  });

  const result8 = calculate(result7, '0');
  expect(result8).toEqual({
    total: null, next: '10', operation: '-', lastComputed: '9',
  });

  const result9 = calculate(result8, '+');
  expect(result9).toEqual({
    total: '-1', next: null, operation: '+', lastComputed: '',
  });
});
