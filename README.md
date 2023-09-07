# Typescript Exercises

The following exercises are from [typescriptutorial.net](https://www.typescripttutorial.net/)

## Set up

- Install typescript compiler and check the version: 
    ```sh
    npm install -g typescript 
    ``` 
    ```sh
    tsc --v
    ```
- Install ts-node: 
    ```sh
    npm install -g ts-node
    ```
- Compile TS files to JS using the compiler as follows:
    ```sh
    tsc app.ts
    ```
- Run the compiled JS files using node e.g. 
    ```sh
    node app.js
    ```
- Run TS files without first compiling using the ts-node package e.g. 
    ```sh
    ts-node app.ts
    ```

## Exercise 1: Hello World!
Create a hello world Typescript file and compile it to JavaScript using the commands above and the following code block:
```ts
let message: string = 'Hello, World!';
console.log(message);
```
Identical to vanilla JavaScript, but with `: string` appended to the variable name to define its expected type.

## Exercise 2: View in Browser
Create an HTML file, use the TS script inside it to create a H1 element on the page that will contain the text of the `message` variable.

> "Note that the app.js is the output file of the app.ts file, therefore, you should never directly change the code in this file, or you’ll lose the changes once you recompile the app.ts file." - TypeScript Tutorial.net

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript: Hello, World!</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

```ts
let message: string = 'Hello, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading to the document
document.body.appendChild(heading);
```

## TypeScript Types

The different types have different **properties** and **methods**. For example, a string such as `Hello World` has a `length` property, and a `toLocaleUpperCase()` method.

There are 'primitive' types and 'object' types, as normal in JavaScript.

## Type Annotation
TypeScript uses annotations to explicitly indicate what the type of a variable (or other) is. The syntax for this is `: type` after the variable name. For e.g.:
### Primitives
```ts
let name: string = 'John';
let age: number = 25;
let active: boolean = true;
```
### Arrays
To set an array whose values are consistently of only one type, use `: type[]` as in the following example:
```ts
let names: string[] = ['Steve', 'Matt', 'Suzie', 'Deepshika', 'Olivia'];
```

The `readonly` keyword can prevent arrays from being augmented:
```ts
const namesArr: readonly string[] = ["Susan"];
names.push("Jill"); // Error: Property 'push' does not exist on type 'readonly string[]'. try removing the readonly modifier and see if it works?
```
The above example is from [W3 Schools](https://www.w3schools.com/typescript/typescript_arrays.php).

### Tuples
Tuples can be used stand alone, or as part of a multi-dimensional array.

### Implicit Typing
If no type is explicitly assigned to, for e.g., a variable, then TypeScript will implicity assign one. For example, for the code below, TypeScript would infer that `name` is of type `string` because of the value with which it is initialised.
```ts
let name = 'John';
```
