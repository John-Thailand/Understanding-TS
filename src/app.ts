// const userName = 'Max';
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// const add = (a: number, b: number = 1) => {
//     return a + b;
// }

// const printOutput: (output: string | number) => void = output => {
//     console.log(output);
// }

// printOutput(add(5));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30,
}

const copiedPerson = {
    ...person,
};

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {
    firstName: userName, age
} = person;
console.log(userName, age, person);
