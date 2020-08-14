/*
Callbacks are the functions that are slipped or passed into another function to decide
the invocation of that function. You may have seen them passed to other methods, for
example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned
from another function just like any other normal value, are called first class functions.
In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value
are called higher order functions.

When the functions are passed in to another function or returned from another function, then
those functions which gets passed in or returned can be called a lambda.
*/

// Example: pass lambda of which function to execute for each request
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


/*
An imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example
is writing a for loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you
want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the
computer should perform them. For example, instead of using the for loop mentioned above, you could call
the map method which handles the details of iterating over an array. This helps to avoid semantic errors,
like the "Off By One Errors" that were covered in the Debugging section.
*/

/*
One of the core principles of functional programming is to not change things. Changes lead to bugs.
It's easier to prevent bugs knowing that your functions don't change anything, including the function
arguments or any global variable.
*/

/*
Another principle of functional programming is to always declare your dependencies explicitly. This means
if a function depends on a variable or object being present, then pass that variable or object directly
into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly
what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or
cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what
part of the code executes it.
*/

/* Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
You may use a for loop or the forEach method. */
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach(item => {
    newArray.push(callback(item));
  });
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s); //[ 46, 130, 196, 10 ]

/*
The variable watchList holds an array of objects with information on several movies.
Use a combination of filter and map on watchList to assign a new array of objects with
only title and rating keys. The new array should only include objects where imdbRating
is greater than or equal to 8.0. Note that the rating values are saved as strings in the
object and you may need to convert them into numbers to perform mathematical operations on them.
*/
// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

var filteredList = watchList.filter(movie =>
  { return parseFloat(movie["imdbRating"]) >= 8.0; }).map(movie =>
  { return { "title": movie["Title"], "rating": movie["imdbRating"] }; });

console.log(filteredList);

/*
Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
You may use a for loop or the Array.prototype.forEach() method.
*/
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){

  var newArray = [];
  this.forEach(item => {
    if (callback(item)) {
      newArray.push(item);
    }
  });

  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s); // 23, 65, 5


/*
The reduce method iterates over each item in an array and returns a single value
(i.e. string, number, object, array). This is achieved via a callback function
that is called on each iteration.

The callback function accepts four arguments. The first argument is known as the
accumulator, which gets assigned the return value of the callback function from the
previous iteration, the second is the current element being processed, the third is
the index of that element and the fourth is the array upon which reduce is called.

In addition to the callback function, reduce has an additional parameter which takes
an initial value for the accumulator. If this second parameter is not used, then the
first iteration is skipped and the second iteration gets passed the first element of
the array as the accumulator.
*/
/*
The variable watchList holds an array of objects with information on several movies.
Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
Recall from prior challenges how to filter data and map over it to pull what you need.
You may need to create other variables, and return the average rating from getRating
function. Note that the rating values are saved as strings in the object and need to
be converted into numbers before they are used in any mathematical operations.
*/
function getRating(watchList){
  // Only change code below this line
  var filtered = watchList.filter(item => {
    return item["Director"] === "Christopher Nolan";
  });
  var averageRating = filtered.reduce((sum, movie) => {
    return sum + parseFloat(movie["imdbRating"]);
  }, 0);

  // Only change code above this line
  return averageRating / filtered.length;
}
console.log(getRating(watchList));

/*
We have defined a function named squareList. You need to complete the code for the squareList
function using any combination of map(), filter(), and reduce() so that it returns a new array
containing only the square of only the positive integers (decimal numbers are not integers)
when an array of real numbers is passed to it. An example of an array containing only real
numbers is [-3, 4.8, 5, 3, -3.2].
*/
const squareList = (arr) => {
  // Only change code below this line
  return arr.filter(x => {
    return Number.isInteger(x) && x > 0;
  }).map(x => {
    return x * x;
  });
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/*
JavaScript's default sorting method is by string Unicode point value, which may return
unexpected results. Therefore, it is encouraged to provide a callback function to specify
how to sort the array items. When such a callback function, normally called compareFunction,
is supplied, the array elements are sorted according to the return value of the compareFunction:
If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come
before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then
b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and
b, then a and b will remain unchanged.
*/
// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
  })
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

/*
A side effect of the sort method is that it changes the order of the elements in the original array.
In other words, it mutates the array in place. Use the sort method in the nonMutatingSort function
to sort the elements of an array in ascending order. The function should return a new array, and not
mutate the globalArray variable.
*/
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line

  return [].concat(arr).sort((a, b) => {
    return a - b;
  })
  // Only change code above this line
}
nonMutatingSort(globalArray);

/* Use the split method inside the splitify function to split str into an array of words. The function should return the array.
Note that the words are not always separated by spaces, and the array should not contain punctuation. */
function splitify(str) {
  // Only change code below this line

  return str.split(/\W/);
  // Only change code above this line
}
splitify("Hello World,I-am code");

/* Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. */
function urlSlug(title) {
  console.log(title);
  return title.toLowerCase().split(/\s/).filter(word => word !== '').join('-');
}

/* The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.*/
function checkPositive(arr) {
  return arr.every(x => x > 0);
}
checkPositive([1, 2, 3, -4, 5]);

/* The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not. */
function checkAnyPositive(arr) {
  return arr.some(x => x > 0)
}
checkPositive([1, 2, 3, -4, 5]);

/* The arity of a function is the number of arguments it requires. Currying a function means to convert
 a function of N arity into N functions of arity 1.
In other words, it restructures a function so it takes one argument, then returns another function that
takes the next argument, and so on. */
//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3

/* This is useful in your program if you can't supply all the arguments to a function at one time.
You can save each function call into a variable, which will hold the returned function reference
that takes the next argument when it's available. Here's an example using the curried function in
the example above: */
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

/* Similarly, partial application can be described as applying a few arguments to a function at
a time and returning another function that is applied to more arguments. Here's an example: */
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

// Fill in the body of the add function so it uses currying to add parameters x, y, and z.
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
add(10)(20)(30);