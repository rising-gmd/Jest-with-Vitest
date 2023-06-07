import { extractFormValues } from './src/parser.js';
import { cleanNumbers } from './src/util/numbers.js';
import { calculateNumbers } from './src/math.js'
import { prepareOutput } from './src/util/output.js';


const form = document.querySelector('form');
function formSubmitHandler(event) {
  event.preventDefault()
  const numbers = extractFormValues(form)
  const cleanNums = cleanNumbers(numbers)
  const sum = calculateNumbers(cleanNums)
  prepareOutput(sum)
}

form.addEventListener('submit', formSubmitHandler);
