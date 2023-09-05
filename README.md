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

## Exercise 2: Browser View
Create an HTML file, use the TS script inside it to create a H1 element on the page that will contain the text of the `message` variable.

> "Note that the app.js is the output file of the app.ts file, therefore, you should never directly change the code in this file, or you’ll lose the changes once you recompile the app.ts file." - TypeScript Tutorial.net


