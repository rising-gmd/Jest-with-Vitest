export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateNumbers(numbers) {
  let result = ''
  return result = add(numbers).toString();
}
