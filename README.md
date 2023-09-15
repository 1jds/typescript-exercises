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
A tuple is a way of storing multiple data items in a single variable. To type a tuple, we do the following in TypeScript:
```ts
// define a tuple with types
const varName: [number, boolean, string];

// initialize with the correct types
varName = [6, true, 'string value'];
```
 
Tuples can be used stand alone, or as part of a multi-dimensional array. E.g.
```ts
const varName: [number, boolean, string][];
// employee id, is admin access, first name
varName = [[1, true, "Jess"], [2, false, "Bob"], [3, true, "Jake"]];
```

### Object Typing
To type a single object, the syntax is as follows:
```ts
const user: { firstName: string, lastName: string, birthYear: number, online: boolean } = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1954,
  online: false
};
```
Obviously, it would often be more useful to be able to reuse the 'user' type above. That's where interfaces come in.

To make a key-value pair optional, the property name can be followed by a question mark as in the syntax example below:
```ts
const dog: { 
  petName: string, 
  cute?: boolean 
} = { 
  petName: "Mochi" 
};
```
Without the `?` which makes 'cute' optional, an error will be returned, as in the following example:
```ts
const cat: { 
  petName: string, 
  cute: boolean 
} = { 
  petName: "Meowchi" 
};
// error TS2741: Property 'cute' is missing in type '{ petName: string; }' but required in type '{ petName: string; cute: boolean; }'    
```

### Interfaces & Aliases
To make a reusable type, we have to define it separately as its own pattern separate from the object or variable which uses it. Interfaces and Aliases allow for this reusability.

For example, to create an object alias:
```ts
type Customer = {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  isMember: boolean;
};

```
To make an interface with the same types for an object pattern, the following syntax would be used:

```ts
interface Customer {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  isMember: boolean;
}
```

To create an array alias, the syntax is as follows for an alias:
```ts
type CustomerNames = string[];
```

And as follows for an interface:

```ts
interface CustomerNames {
  [index: number]: string;
}
```

Although, W3 schools states that "Interfaces are similar to type aliases, except they only apply to object types." So, maybe one could argue that the interface above is not a proper array?

#### Composing and extending aliases and interfaces
Type aliases and interfaces can both extend/compose objects together, as in the following examples:

```ts
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

// Source: W3 Schools
```


Or
```ts
type Name = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};
type Contact = Name & PhoneNumber;

interface Name {
  firstName: string;
  lastName: string;
}
interface PhoneNumber {
  landline: string;
  mobile: string;
}
interface Contact extends Name, PhoneNumber {}

// Source: Carl Rippon - see link below
```

Carl Rippon [in this helpful article which compares the two](https://www.carlrippon.com/when-to-use-type-aliases-v-interfaces/) recommends generally using aliases, notes that both interfaces and aliases have some features that the others don't, but concludes that the most important thing is to be consistent to avoid confusion.

### Union Types
Untion types are either/or types. These are expressed with a 'pipe' operator `|` . For example:
```ts
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

// Source: W3 Schools
```

#### Problems with using unions

Using union types opens the door to potential difficulties. For example, (in the example above) if the error code coming in is of type `number` but the function it's coming into employs string methods on the parameter then there will be errors.

So, in a sense, while using a union might be useful (or even necessary) it also goes against the whole emphasis of TypeScript which is towards locking down the types to avoid such bugs.  

### Functions

> TypeScript has a specific syntax for typing function parameters and return values.
  <br><em>W3 Schools</em>



#### Void
For functions which don't return a 'value' <em>per se</em>, such as those which only trigger side-effects such as a `console.log`, then the return type can be set to `void`.

### Implicit Typing
If no type is explicitly assigned to, for e.g., a variable, then TypeScript will implicity assign one. For example, for the code below, TypeScript would infer that `name` is of type `string` because of the value with which it is initialised.
```ts
let name = 'John';
```

### Resources

#### The Docs!
- [Microsoft TypeScript Docs](https://www.typescriptlang.org/)

#### React
- [Cheatsheets for Using TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)

#### TypeScript in VS Code
- [Setup for TypeScript in VS Code](https://code.visualstudio.com/docs/languages/typescript)

#### Beginner's Guide & Cheatsheet
- [Beginner's Guide from FCC](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)