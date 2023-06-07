export function prepareOutput(result) {
    const output = document.getElementById('result');
    try {
        let resultText = `Sum is: ${result}`;
        output.textContent = resultText;
    } catch (error) {
        output.textContent = error.message
    }
}