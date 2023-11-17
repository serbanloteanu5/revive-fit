/* Filename: complex_code.js
   Content: Complex code example showcasing advanced JavaScript concepts */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Higher-order function to calculate the sum of an array
function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Promisify a setTimeout example
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Asynchronous function using async/await
async function performAsyncTask() {
  try {
    await wait(2000);
    console.log("Async task complete!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Singleton pattern example
const Singleton = (() => {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance.");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Event handling example
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Closure example
function outerFunction() {
  const message = "Hello from outer function!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const myFunction = outerFunction();
myFunction();

// AJAX request example using Fetch API
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// Regular expression example
const pattern = /[A-Z]+/;
const str = "HELLO WORLD";
console.log(pattern.test(str)); // true

// Complex object example
const complexObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["coding", "reading", "gaming"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

console.log(complexObject);

// Usage of 'Map' data structure
const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");

console.log([...myMap]);

// Usage of 'Set' data structure
const mySet = new Set([1, 2, 3, 4, 5]);

console.log([...mySet]);

// Usage of 'Proxy' object
const target = {
  message: "Hello, World!",
};

const handler = {
  get: function (target, prop) {
    return prop in target ? target[prop] : "Property does not exist!";
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message);
console.log(proxy.nonExistentProperty);

// Usage of 'Symbol' data type
const symbol1 = Symbol("symbol1");
const symbol2 = Symbol("symbol2");

console.log(symbol1 === symbol2); // false

// Usage of 'Generator' function
function* generatorFunction() {
  yield "This";
  yield "is";
  yield "a";
  yield "generator";
  yield "function";
}

const generator = generatorFunction();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// Usage of 'BigInt' data type
const bigIntNumber = 9007199254740991n;
console.log(bigIntNumber);

// Usage of 'Web Workers'
const myWorker = new Worker("worker.js");
myWorker.postMessage("Hello from main script!");

// ... Add more complex code here ...

console.log("Complex code executed successfully!");