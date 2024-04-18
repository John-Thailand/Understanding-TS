const userName = 'Max';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

const add = (a: number, b: number = 1) => {
    return a + b;
}

const printOutput: (output: string | number) => void = output => {
    console.log(output);
}

printOutput(add(5));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}
