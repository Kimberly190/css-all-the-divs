//exercises and notes from
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/

/*
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

*/
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  
  if (count <= 0) {
    return count + " Hold";
  }
  return count + " Bet";
}

console.log("Dealt: " + 2);
console.log(cc(2));
console.log("Dealt: " + 3);
console.log(cc(3));
console.log("Dealt: " + 7);
console.log(cc(7));
console.log("Dealt: " + 'K');
console.log(cc('K'));
console.log("Dealt: " + 'A');
console.log(cc('A'));



/* Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range. */
var alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    /*...*/
    24:"C",
    25:"B",
    26:"A"
  };
  alpha[2]; // "Y"
  alpha[24]; // "C"
  
  var value = 2;
  alpha[value]; // "Y"

  // Setup
function phoneticLookup(val) {
    var result = "";
  
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };

    if (lookup.hasOwnProperty(val)) {
        result = lookup[val];
    }
  
    return result;
  }
  
  console.log(phoneticLookup("charlie"));
  console.log(phoneticLookup("tango"));


/* The sub-properties of objects can be accessed by chaining together the dot or bracket notation. */
// Setup
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents); //maps

  // Setup
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  var secondTree = myPlants[1].list[1];
  console.log(secondTree); //pine



/*
You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.
*/
// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  function updateRecords(id, prop, value) {
    let album = collection[id];
    
    if (value === "") {
      delete album[prop];
    } else if (prop === "tracks") {
      if (!album.hasOwnProperty("tracks")) {
        album.tracks = [];
      }
      album.tracks.push(value);
    } else {
      album[prop] = value;
    }
  
    return collection;
  }
  
  updateRecords(5439, "artist", "ABBA");
  console.log(collection);



  /*
  We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
  */
  // Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

lookUpProfile("Akira", "likes");


/*
Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
*/
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

/* ternary AKA conditional operator */
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);

function checkSign(num) {
    return num < 0 ? "negative"
      : num === 0 ? "zero"
      : "positive";
  }
  
  checkSign(10);


  /* recursion */
  /* We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind. */
  function countdown(n){
    if (n < 1) {
      return [];
    }
    let arr = countdown(n-1);
    arr.unshift(n);
    return arr;
  }


  /* We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */
  function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
      return [startNum];
    }
    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  };



  /****************
  ES6 exercises
  *****************/

  /* the problem with var */
  var printNumTwo;
  for (var i = 0; i < 3; i++) {
    if (i === 2) {
      printNumTwo = function() {
        return i;
      };
    }
  }
  console.log(printNumTwo());
  // returns 3

  /* Object.freeze() */
  function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


  /* arrow syntax function shortcuts */
  const myFunc = function() {
    const myVar = "value";
    return myVar;
  }
  //becomes
  const myFunc = () => {
    const myVar = "value";
    return myVar;
  }
  //becomes
  const myFunc = () => "value";

  // doubles input value and returns it
const doubler = (item) => item * 2;
//If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.
// the same function, without the argument parentheses
const doubler = item => item * 2;
//It is possible to pass more than one argument into an arrow function.
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;


/* default parameters */
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous


/* rest parameter and spread parameter, AKA spread syntax */
//in functions args it's the 'rest parameter'
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
  console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  //in arrays it's the 'spread parameter'
  //ES5:
  var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
//ES6 spread:
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
//"We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain."
//"the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:"
//const spreaded = ...arr; // will throw a syntax error


/* destructuring assignment */
//ES5
const user = { name: 'John Doe', age: 34 };
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
//ES6 equiv
const { name, age } = user; // name = 'John Doe', age = 34
//with renaming:
const { name: userName, age: userAge } = user; // userName = 'John Doe', userAge = 34
//"You may read it as "get the value of user.name and assign it to a new variable named userName" and so on."
//or "get name as userName"
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  //assign the whole inner object to a local
  const { tomorrow: { low, high }} = LOCAL_FORECAST;
  //assign properties from inner object to locals
  const { today: { low: lowToday, high: highToday }}
    = LOCAL_FORECAST;
//with arrays
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
//swap
let a = 8, b = 6;
[a, b] = [b, a];
//slice
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
//^ The rest element only works correctly as the last variable in the list.
//destructure object in function call (wow this requires the caller to know what's up)
const joe = {
	name: 'joe',
  age: 30,
  nationality: 'USA',
  location: 'Mars'
}
//expanded version
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
  console.log(name, age, nationality, location);
}
profileUpdate(joe);
//compact version - basically the param is any object which has these properties
const profileUpdate2 = ({ name, age, nationality, location }) => {
	console.log(name, age, nationality, location);
};
profileUpdate2(joe);
//another example:
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = ({max, min}) => (max + min) / 2.0; 



/*
string template literals
*/
const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  // Template literal with multi-line and string interpolation
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  console.log(greeting); // prints
  // Hello, my name is Zodiac Hasbro!
  // I am 56 years old.


/*
object property shorthand: newly created object will adopt the property name of what it is given
*/
const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name,
      age,
      gender,
      dob: new Date()
    };
  };
  let julia = createPerson('julia', 15, 'F');
  console.log(julia); //{ age: 15, dob: [object Date] { ... }, gender: "F", name: "julia" }


/* object functions */
//ES5:
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };
//ES6:
const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };


//now declare types with 'class' and 'constructor'
//ES5
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');
//ES6
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
const zeus = new SpaceShuttle('Jupiter');
//^UpperCamelCase should be used by convention for ES6 class names

//getters and setters
class Thermostat {
    //utility functions
    fToC(tempF) {
      return (tempF - 32) * 5.0/9;
    }
    cToF(tempC) {
      return tempC * 9.0/5 + 32;
    }
    
    constructor(tempF) {
      this._tempC = this.fToC(tempF);
    }
    get temperature() {
      return this._tempC;
    }
    set temperature(tempC) {
      this._tempC = tempC;
    }
  }
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius

//^_ to indicate private variable is convention, but it does not actually make it private = trust system!


/*
link script as module
*/
//<script type="module" src="filename.js"></script>

//export single function at declare (i.e. make it available for import):
export const add = (x, y) => {
    return x + y;
  }

//named export: export one or multiples after declare:
const add = (x, y) => { return x + y; }
const subtract = (x, y) => { return x - y; }
export { add, subtract };
//then import in main js
import { add, subtract } from './math_functions.js';
//or
import * as mathModule from './math_functions.js';
//^The relative file path (./) and file extension (.js) are required when using import in this way.

//fallback export: the one thing they get if they don't import by name?
//"Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module."
// named function
export default function add(x, y) {
    return x + y;
  }
//can also be for an anonymous function:
// anonymous function
export default function(x, y) {
    return x + y;
  }
//"Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const"
//to import a default:
import thething from './module.js';
//"The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default."


/*
promises
*/
/*"A promise in JavaScript is exactly what it sounds like - you use it to make
a promise to do something, usually asynchronously. When the task completes, you
either fulfill your promise or fail to do so. Promise is a constructor function,
so you need to use the new keyword to create one. It takes a function, as its
argument, with two parameters - resolve and reject. These are methods used to
determine the outcome of the promise. The syntax looks like this:"*/
const myPromise = new Promise((resolve, reject) => {

});
/*"A promise has three states: pending, fulfilled, and rejected. The promise you
created in the last challenge is forever stuck in the pending state because you
did not add a way to complete the promise. The resolve and reject parameters
given to the promise argument are used to do this. resolve is used when you want
your promise to succeed, and reject is used when you want it to fail. These are
methods that take an argument, as seen below."*/
//"The then method is executed immediately after your promise is fulfilled with resolve."
//result (in then()) comes from the argument given to the resolve method.
//"catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called."
//error (in catch()) is the argument passed in to the reject method.
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });


//other misc examples
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//falsy values:
//false, 0, "" (an empty string), NaN, undefined, and null