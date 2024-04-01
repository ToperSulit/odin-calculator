let displayValue = '0';
let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

const display = document.querySelector('.display');
display.textContent = displayValue;

function updateDisplay() {
    display.textContent = displayValue;
}

document.querySelectorAll('.operator, .operand, .clear, .equals').forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (!isNaN(buttonValue) || buttonValue === '.') {
            if (displayValue === '0' || result !== '') {
                displayValue = buttonValue;
                result = '';
            } else {
                displayValue += buttonValue;
            }
        } else if (buttonValue === 'AC') {
            displayValue = '0';
            firstNumber = '';
            operator = '';
            secondNumber = '';
            result = '';
        } else if (buttonValue === '=') {
            secondNumber = displayValue;
            result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            displayValue = result;
        } else {
            firstNumber = displayValue;
            operator = buttonValue;
            displayValue = '0';
        }

        updateDisplay();
    });
});

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                displayValue = 'Error: Cannot divide by 0';
                return '';
            }
            return num1 / num2;
        default:
            return '';
    }
}