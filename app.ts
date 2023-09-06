// Exercise 1
// let message: string = "Hello World!"
// console.log(message)

// Exercise 2
let message: string = 'Hello, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading to the document
document.body.appendChild(heading);

// Exercise on Understanding Type Annotations
let counter: number
counter = 5

export {}; // tip from Bobby Hadz to avoid 'Cannot redeclare block-scoped variable in TypeScript'
