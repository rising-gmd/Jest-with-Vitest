import { validateNumber, validateStringNotEmpty } from './validation.js';

export function transformToNumber(value) {
  if (typeof(value) === 'string') {
    return +value
  } else {
    throw new Error('Value not found')
  }
}

export function cleanNumbers(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers
}

