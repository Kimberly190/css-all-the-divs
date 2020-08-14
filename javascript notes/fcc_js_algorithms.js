/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the
sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4
(both inclusive) is 10. */
function sumAll(arr) {
  let sum = arr[1];
  // count either up or down from first to second number
  for (let i = arr[0]; i != arr[1]; (arr[0] < arr[1] ? i++ : i--)) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]); //10

//ALT
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]);

/* Diff: Compare two arrays and return a new array with any items only found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.
Note You can return the array with its elements in any order. */
function diffArray(arr1, arr2) {
  var newArr = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(y => !arr1.includes(y)));
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* Seek and destroy: You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of the same value as
these arguments.  Note You have to use the arguments object. */
function destroyer(arr) {
  return arr.filter(x => !Array.from(arguments).includes(x));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* Make a function that looks through an array of objects (first argument) and returns an array
of all objects that have matching name and value pairs (second argument). Each name and value pair
of the source object has to be present in the object from the collection if it is to be included
in the returned array. */
// Note: for (let x in array) --- x will be indices
// for (let x of array) --- x will be elements
function whatIsInAName(collection, source) {
  var arr = [];

  for (let obj of collection) {
    if (Object.keys(source).every(property => {
      return obj[property] === source[property]
    })) {
      arr.push(obj);
    }
  }

  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */
function spinalCase(str) {
  return str.split(/_|\W|(?=[A-Z][a-z])/).join('-').toLowerCase();
}
spinalCase('This Is Spinal Tap');
spinalCase('This_Is_Spinal_Tap');
spinalCase('ThisIsSpinalTap');

//ALT
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}


/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the
end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
// really wanted this to work!
function translatePigLatin(str) {
  //var result = str.replace(/(^[^aeiou]+)(.*)/, "$2" + ("$1" ? "$1" : "w") + "ay");
  var result = str.replace(/(^[^aeiou]+)(.*)/, "$2$1ay");
  if (!/^[^aeiou]/.test(str)) {
    result = result + "way";
  }
  console.log(result);
  return result;
}

translatePigLatin("consonant");
translatePigLatin("eight");

//ALT
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}
//ALT
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

/* Perform a search and replace on the sentence using the arguments provided and return the new sentence. */
// Note preserve case
function myReplace(str, before, after) {
  after = /^[a-z]+$/.test(before) ? after.toLowerCase()
    : /^[A-Z][a-z]+$/.test(before) ? after[0].toUpperCase() + after.substring(1)
    : after;
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

//ALT
function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return
the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/
function pairElement(str) {
  let code = {
    "G": "C",
    "C": "G",
    "A": "T",
    "T": "A"
  };
  return str.split('').map(pair => {
    return [pair, code[pair]];
  });
}

pairElement("GCG");

/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  function incrementChar(c) {
    let code = c.charCodeAt();
    return String.fromCharCode(++code);
  }
  
  for (let char = str[0]; char < str[str.length - 1]; char = incrementChar(char)) {
    if (str.indexOf(char) == -1) {
      return char;
    }
  }
}

fearNotLetter("abce");

//ALT
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

/*
Write a function that takes two or more arrays and returns a new array of unique values
in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be
sorted in numerical order.
*/
function uniteUnique(...arr) {
  return arr.reduce((accum, next) => {
    next.forEach(i => {
      if (!accum.includes(i)) {
        accum.push(i);
      }
    });
    return accum;
  });
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//ALT
//jshint esversion:6
function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

//ALT
function uniteUnique(arr1, arr2, arr3) {
  var newArr;
  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(
      arrB.filter(function(i) {
        return arrA.indexOf(i) === -1;
      })
    );
  });

  return newArr;
}

/* Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities. */
function convertHTML(str) {
  let map = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  }
  Object.keys(map).forEach(target => {
    str = str.replace(new RegExp(target, 'g'), map[target]);
  });

  return str;
}

//ALT
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

//unrelated - function to list n fibonacci numbers:
function getFibs(count) {
  if (count <= 1) {
    return [1];
  } else if (count == 2) {
    return [1, 1];
  } else {
    let fibs = getFibs(count - 1);
    return fibs.concat(fibs[count - 2] + fibs[count - 3]);
  }
}

/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. */
function sumFibs(num) {
  let fibs = [];
  let currentFib = 1, nextFib = 1;
  while (currentFib <= num) {
    fibs.push(currentFib);
    let temp = nextFib;
    nextFib += currentFib;
    currentFib = temp;
  }
  return fibs.filter(x => x % 2 == 1).reduce((sum, n) => sum + n);
}

console.log(sumFibs(4));
console.log(sumFibs(10));

//ALT
function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

/* Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */
//MINE
function sumPrimes(num) {
  let nums = [], i = 2;
  while (i <= num) nums.push(i++);

  // sieve of eratosthenes: delete every nth multiple where n is each successive prime, up to sqrt(num)
  for (let i = 0, factor = nums[i];
       factor <= Math.sqrt(num);
       /* nop */) {

    // (factor ** 2 - 2): square of the factor is the least multiple; -2 because 0-based and 1 is missing
    for (let j = (factor ** 2 - 2); j < nums.length; j += factor) {
      delete nums[j];
    }

    // skip to next prime; intermediate composites already deleted
    do { factor = nums[++i]; } while (!factor);
  }

  return nums.filter(x => x).reduce((sum, x) => sum + x);
}

console.log('sum to 10: ', sumPrimes(10));
console.log('sum to 26: ', sumPrimes(26));

//ALT
//this looks slick at first, but the 'sieve' is being searched over and over, this is not the sieve
function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }
}

//ALT2 - still doing test divisions on all the entries, this is not the sieve
function sumPrimes(num) {
  // step 1
  let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
  // step 2
  let onlyPrimes = arr.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
  // step 3
  return onlyPrimes.reduce((a, b) => a + b);
}
// test here
sumPrimes(977);


/* 
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
//see also primes.js in node_basics
//MINE v1 - awful
function getPrimesUpTo(num, filter = true) {
  let nums = [], i = 2;
  while (i <= num) nums.push(i++);

  // sieve of eratosthenes: delete every nth multiple where n is each successive prime, up to sqrt(num)
  for (let i = 0, factor = nums[i];
       factor <= Math.sqrt(num);
       /* nop */) {

    // (factor ** 2 - 2): square of the factor is the least multiple; -2 because 0-based and 1 is missing
    for (let j = (factor ** 2 - 2); j < nums.length; j += factor) {
      delete nums[j];
    }

    // skip to next prime; intermediate composites already deleted
    do { factor = nums[++i]; } while (!factor);
  }

  return filter ? nums.filter(Boolean) : nums;
}

function getPrimeFactors(num) {
  let primes = getPrimesUpTo(num / 2);
  //console.log('primes ', primes.slice(0, 10), '...', primes[primes.length - 1]);
  let factors = [];

  let currentQuotient = num;
  for (let i = 0; i < primes.length && currentQuotient > 1; i++) {
    let currentPrime = primes[i];
    //console.log('test division ', currentPrime);
    if (currentQuotient % currentPrime == 0) {
      factors.push(currentPrime);
      while (currentQuotient % currentPrime == 0) {
        //console.log('test division expand factor');
        currentQuotient = currentQuotient / currentPrime;
      }
    }
  }
  return factors.length > 0 ? factors : [num];
}

function smallestCommons2(arr) {
  let min = Math.min(...arr), max = Math.max(...arr), allNums = [];
  while (min <= max) { allNums.push(min++); }
  console.log('smallestCommons2 for ', arr, ', allNums ', allNums);

  // start with the two greatest in the range
  let multiple = allNums[allNums.length - 1] * allNums[allNums.length - 2];
  //TODO could this be improved by including the order of each factor?
  // for each remaining number in the range...
  for (let i = allNums.length - 3, num = allNums[i]; i >= 0; num = allNums[--i]) {
    // ..until it divides the multiple...
    while (multiple % num !== 0) {
      let factors = getPrimeFactors(num);
      console.log('multiple is ', multiple, ', not yet a multiple of / get prime factors of ', num, ': ', factors);
      // ..multiply by its greatest prime factors
      for (let factor of factors.reverse()) {
        // check again after each factor
        if (multiple % num !== 0) {
          multiple *= factor;
        }
      }
    }
  }
  return multiple;
}

//console.log(smallestCommons2([1,5]));
//console.log(smallestCommons2([1,9]));
//console.log(smallestCommons2([2,10]));
//console.log(smallestCommons2([23,18]));
console.log(smallestCommons2([1,13]));


// MINE v2 - using gcd
// lcm (a, b, c) = lcm (lcm(a, b), c)
// lcm (a, b) = (a * b) / gcd (a, b)
// gcd (a, b) = gcd(b, a % b) where gcd(a, 0) = a
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

//console.log(gcd(48, 18)); //

function lcm(a, b) {
  return a * b / gcd(a, b);
}

//console.log(lcm(10, 6));

function smallestCommons(arr) {
  let min = Math.min(...arr), max = Math.max(...arr), allNums = [];
  while (min <= max) { allNums.push(min++); }
  console.log('smallestCommons for ', arr, ', allNums ', allNums);

  return allNums.reverse().reduce((mult, x) => lcm(mult, x));
}

//console.log(smallestCommons([1,5]));
//console.log(smallestCommons([1,9]));
//console.log(smallestCommons([2,10]));
//console.log(smallestCommons([23,18]));
console.log(smallestCommons([1,13]));


/* Flatten a nested array. You must account for varying levels of nesting. */
// NOTE steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
function steamrollArray(arr) {
  for (let i = 0, element = arr[i]; i < arr.length; element = arr[++i]) {
    if (Array.isArray(element)) {
      let result = steamrollArray(element);
      // special handling for the test case that [] should be excised rather than entered as undefined...
      if (result.length > 0) {
        arr = arr.slice(0, i).concat(...result).concat(arr.slice(i + 1));
      } else {
        // excise
        arr = arr.slice(0, i).concat(arr.slice(i + 1));
        i--;
      }
    }
  }
  return arr;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));

//ALT - why does this work for []?
function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
function binaryAgent(str) {
  return str.split(' ').map(s => {
    return String.fromCharCode(parseInt(s, 2))
  }).join('');
}

let result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(result);

/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument). */
function truthCheck(collection, pre) {
  return collection.every(x => x[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
If either argument isn't a valid number, return undefined.
*/
function addTogether() {
  let args = Array.from(arguments);
  if (args.every(x => typeof x === "number")) {
    if (args.length > 1) {
      return args[0] + args[1];
    } else {
      return function(b) {
        if (typeof b === "number") {
          return args[0] + b;
        }
      }
    }
  }
}

console.log(addTogether(2,3));
console.log(addTogether(2)(2));
console.log(addTogether(2)([3]));

/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/
var Person = function(firstAndLast) {
  let _last, _first;
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return _first + " " + _last;
  };
  this.getFirstName = function() {
    return _first;
  };
  this.getLastName = function() {
    return _last;
  };
  this.setFirstName = function(first) {
    _first = first;
  };
  this.setLastName = function(last) {
    _last = last;
  };
  this.setFullName = function(firstAndLast) {
    this.setFirstName(firstAndLast.split(' ')[0]);
    this.setLastName(firstAndLast.split(' ')[1]);
  };
  this.setFirstName(firstAndLast.split(' ')[0]);
  this.setLastName(firstAndLast.split(' ')[1]);
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
//Object.keys(bob).length should return 6.
//bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").

/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/
//period = sqrt (R^3 * 4 * PI^2 / GM)
//https://www.physicsclassroom.com/class/circles/Lesson-4/Mathematics-of-Satellite-Motion
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr = arr.map(s => {
    let radius = s.avgAlt + earthRadius;
    return {
      name: s.name,
      orbitalPeriod: Math.round(Math.sqrt((radius ** 3) * 4 * (Math.PI ** 2) / GM))
    }
  });
  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
