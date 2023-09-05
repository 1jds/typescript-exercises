"use strict";
// Exercise 1
// let message: string = "Hello World!"
// console.log(message)
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 2
var message = 'Hello, World!';
// create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add the heading to the document
document.body.appendChild(heading);
// Exercise on Understanding Type Annotations
var counter;
counter = 5;
