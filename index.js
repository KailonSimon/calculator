const input = document.querySelector('.input-text');
const digits = document.querySelectorAll('.digit');
const flipSignBtn = document.querySelector('#flip-sign-btn');
const addBtn = document.querySelector('#add-btn');
const subtractBtn = document.querySelector('#subtract-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const divideBtn = document.querySelector('#divide-btn');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');

let num1 = 0;
let num2 = 0;
let operator = '';

digits.forEach(digit => {
    digit.addEventListener('click', e => {
        if (input.textContent.length == 18) {
            return;
        }
        if (input.textContent == 0) {
            input.textContent = digit.value;
        } else {
            input.textContent += digit.value;
        }
        num1 = parseInt(input.textContent, 10); 
        console.log(num1);
    });
});
flipSignBtn.addEventListener('click', () => {
    if (num2 == 0) {
        num1 = -(num1);
        console.log(`flipt, new number: ${num1}`);
        input.textContent = num1;
    } else if (num1 =! 0 && num2 != 0) {
        num2 = -(num2);
    };
    
});
function setOperator(inputOperator) {
    operator = inputOperator;
};

addBtn.addEventListener('click', () => {
    if (input.textContent != 0) {
        num1 = input.textContent;
        setOperator('+');
        input.textContent = `${num1} + `;
    };
});
subtractBtn.addEventListener('click', () => {
    if (input.textContent != 0) {
        num1 = input.textContent;
        setOperator('-');
        input.textContent = `${num1} - `;
    };
});
multiplyBtn.addEventListener('click', () => {
    if (input.textContent != 0) {
        num1 = input.textContent;
        setOperator('×');
        input.textContent = `${num1} × `;
    };
});
divideBtn.addEventListener('click', () => {
    if (input.textContent != 0) {
        num1 = input.textContent;
        setOperator('÷');
        input.textContent = `${num1} ÷ `;
    };
});
equalsBtn.addEventListener('click', () => {
    nums = input.textContent.split(' ');
    num2 = nums[nums.length - 1];
    input.textContent = operate(operator, num1, num2);
});
clearBtn.addEventListener('click', () => {
    input.textContent = 0;
    num1 = 0;
    num2 = 0;
});

//input.textContent[input.textContent.length - 3]
function operate(operator, num1, num2) {
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    switch (operator) {
        case '+':
            return (`${num1} + ${num2} = ${num1 + num2}`);
        case '-': 
            return (`${num1} - ${num2} = ${num1 - num2}`);
        case '×':
            return (`${num1} × ${num2} = ${num1 * num2}`);
        case '÷':
            return (`${num1} ÷ ${num2} = ${Math.round((num1 / num2) * 100) / 100}`);
    }
}