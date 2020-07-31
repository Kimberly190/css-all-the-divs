//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures

// push() and unshift() with multiple params
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  }
  console.log(mixedNumbers(['IV', 5, 'six']));

// pop() and shift() are for single elements, though, and return the element
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  // splice(): remove any number of consecutive elements from anywhere in an array
  // splice()'s first parameter represents the index on the array from which to begin removing elements,
  // while the second parameter indicates the number of elements to delete
let array = ['today', 'was', 'not', 'so', 'great'];
let spliced = array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
// spliced = ['not', 'so']

// splice() to swap in elements for those removed (third and further params)
const numbers = [10, 11, 12, 12, 15];
numbers.splice(3, 1, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]

// slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched
/* slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the
index at which to stop extraction (extraction will occur up to, but not including the element at this index).*/
//"you can have your cake and slice it, too :P"
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

// ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

/* We have defined a function, copyMachine which takes arr (an array) and num (a number)
as arguments. The function is supposed to return a new array made up of num copies of arr.
We have done most of the work for you, but it doesn't work quite right yet. Modify the
function using spread syntax so that it works correctly (hint: another method we have
already covered might come in handy here!). */
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}     
console.log(copyMachine([true, false, true], 2));

// spread syntax for complex array combination
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

// indexOf()
// indexOf() takes an element as a parameter, and when called, it returns the position, or index,
// of that element, or -1 if the element does not exist on the array.
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists

/* We have defined a function, filteredArray, which takes arr, a nested array,
and elem as arguments, and returns a new array. elem represents an element that
may or may not be present on one or more of the arrays nested within arr. Modify
the function, using a for loop, to return a filtered version of the passed array
such that any array nested within arr containing elem has been removed. */
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) === -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); //empty

  /* Modify myNestedArray, using any combination of strings, numbers, and booleans for data
  elements, so that it has exactly five levels of depth (remember, the outer-most array is
    level 1). Somewhere on the third level, include the string 'deep', on the fourth level,
    include the string 'deeper', and on the fifth level, include the string 'deepest'. */
  let myNestedArray = [
    [
      'level 2',
      [
        'level 3',
        0,
        'deep'
      ],
      [
        ['level 4'],
        [
          'level 4',
          'deeper',
          ['level 5', 0, 'deepest'],
        ]
      ]
    ],
    ['unshift', false, 1, 2, 3, 'complex', 'nested']
  ];


  /* objects */
  /* "At their most basic, objects are just collections of key-value pairs.
  In other words, they are pieces of data (values) mapped to unique identifiers
  called properties (keys). " */
  // two types of property access:
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  foods.bananas = 13;
  foods["grapes"] = 35;
  let straw = "strawberries";
  foods[straw] = 27;
  console.log(foods);

  //for nested objects
  nestedObject.data.onlineStatus.busy = 10;

  /* " Bracket notation is very useful because sometimes object properties are not
  known before runtime or we need to access them in a more dynamic way." */
  // can delete entire properties from object, as well
  let selectedFood = getCurrentFood(scannedItem);
  let inventory = foods[selectedFood];
  if (inventory == 0) delete foods[selectedFood]; //or using dot notation when prop name is known

  // hasOwnProperty() is also "in":
  users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
// assume a users object...
function isEveryoneHere(obj) {
    if ('Alan' in users
      && 'Jeff' in users
      && 'Sarah' in users
      && users.hasOwnProperty('Ryan')) {
        return true;
      }
    return false;
  }

  // iterate an object's keys:
  for (let user in users) {
    console.log(user);
  }
  for (let prop in fancyObject) {
      console.log(`prop name: ${prop} | prop value: ${fancyObject[prop]}`);
  }
  /* NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus
  a key's position on an object, or the relative order in which it appears, is
  irrelevant when referencing or accessing that key.*/

  // example of iterating with object props
  function countOnline(usersObj) {
    let count = 0;
    for (let user in usersObj) {
      if (usersObj[user].online) { //note have to bracket-access the value!
        count++;
      }
    }
    return count;
  }
  
  // Object.keys() to enumerate keys:
  /* "can also generate an array which contains all the keys stored in an object
  using the Object.keys() method and passing in an object as the argument" */
  Object.keys(fancyObject); // = list of object prop names

  //You can add, modify, and remove key-value pairs, check if keys exist, and iterate over all the keys in an object.
  /* Take a look at the object we've provided in the code editor. The user object
  contains three keys. The data key contains five keys, one of which contains an
  array of friends. From this, you can see how flexible objects are as data structures.
  We've started writing a function addFriend. Finish writing it so that it takes a user
  object and adds the name of the friend argument to the array stored in user.data.friends
  and returns that array.*/
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Pete'));
  // ['Sam'], ['Kira'], ['Tomo'], ['Pete']


  /* Reverse the provided string. */
  function reverseString(str) {
    return str.split('').reverse().reduce(
      (current, next) => {
        return current + next;
      });
  }
  reverseString("hello");

  /* Return the factorial of the provided integer. */
  function factorialize(num) {
    if (num == 0) { return 1; }
    return num * factorialize(num - 1);
  }
  factorialize(5);

  /* Return the length of the longest word in the provided sentence. */
  function findLongestWordLength(str) {
    console.log(str.match(/\w+/g));
    return str.match(/\w+/g).reduce(
      (current, next) => {
        return current.length > next.length
          ? current
          : next;
      }).length;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  /* Return an array consisting of the largest number from each provided sub-array.
  For simplicity, the provided array will contain exactly 4 sub-arrays.*/
  function largestOfFour(arr) {
    return arr.map(x => {
      return x.reduce((a, b) => {
        return a > b ? a : b;
      })
    });
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  /* Check if a string (first argument, str) ends with the given target string (second argument, target).
  Not using endsWith(). */
  function confirmEnding(str, target) {
    return target === str.substring(str.length - target.length);
  }
  confirmEnding("Bastian", "n");

  /* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */
  function repeatStringNumTimes(str, num) {
    if (num <= 0) return '';
    let result = '';
    for (let i = 1; i <= num; i++) {
      result += str;
    }
    return result;
  }
  repeatStringNumTimes("abc", 3);

  /* Truncate a string (first argument) if it is longer than the given maximum string length
  (second argument). Return the truncated string with a ... ending. */
  function truncateString(str, num) {
    if (str.length > num) {
      return str.substring(0, num) + '...';
    }
    return str;
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  /* Create a function that looks through an array arr and returns the first element in it that
  passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x)
  is true. If no element passes the test, return undefined. */
  function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) return arr[i];
    }
    return;
  }
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  /* Check if a value is classified as a boolean primitive. Return true or false. */
  function booWho(bool) {
    return (typeof bool === "boolean");
  }
  booWho(null);

  /* Return the provided string with the first letter of each word capitalized. Make sure
  the rest of the word is in lower case.  For the purpose of this exercise, you should also
  capitalize connecting words like "the" and "of". */
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(x => {
      return x.replace(x.charAt(0), x.charAt(0).toUpperCase());
    }).reduce((current, next) => {
      return current + ' ' + next;
    }); //can be .join(' ')
  }
  titleCase("I'm a little tea pot");

  /* You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */
  function frankenSplice(arr1, arr2, n) {
    return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n, arr2.length));
  }
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  /* Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */
  function bouncer(arr) {
    return arr.filter(x => x);
  }
  bouncer([7, "ate", "", false, 9]);

  /* Return the lowest index at which a value (second argument) should be inserted
  into an array (first argument) once it has been sorted. The returned value should be a number.
  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0),
  but less than 2 (index 1).
 */
  function getIndexToIns(arr, num) {
    arr.sort((a, b) => { return a - b; });
    let i = 0;
    while (i < arr.length && num > arr[i]) {
      i++;
    }
    return i;
  }
  getIndexToIns([40, 60], 50);

  /* Return true if the string in the first element of the array contains all of the letters of the
  string in the second element of the array.
  For example, ["hello", "Hello"], should return true because all of the letters in the second string
  are present in the first, ignoring case. */
  function mutation(arr) {
    return arr[1].toLowerCase().split('').every(x => {
      return arr[0].toLowerCase().includes(x);
    })
  }
  mutation(["hello", "hey"]);

  /* Write a function that splits an array (first argument) into groups the length of size
  (second argument) and returns them as a two-dimensional array. */
  function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
      return [arr];
    }
    return [arr.slice(0, size), 
      ...chunkArrayInGroups(arr.slice(size), size)];
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "i"], 3);
  //alt
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
  //alt
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;