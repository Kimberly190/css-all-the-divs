//exercises and notes from
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/

/* regular expressions / regex */
//test() to see if match or not
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true

//ignorecase flag 'i' and or operator |:
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp|paidcodecamp/i;
let result = fccRegex.test(myString);

//NOTE
'string'.match(/regex/);
/regex/.test('string');

//match() executes on the string itself with results
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]

//global flag g
let repeatRegex = /repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

//combine flags
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result = twinkleStar.match(starRegex);

//wildcard .
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true

//character classes
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = vowelRegex.match(quoteSample);

//character class: range
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

//multiple ranges
let jennyStr = "Jenny8675309 call me!!!";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

//negated character sets
///[^aeiou]/gi - all characters not a vowel, including punctuation and whitespace
//not a vowel or number:
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex);

//quantifier '+' for 1 or more consecutive
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

//quantifier '*' for 0 or more consecutive
//NOTE quantifiers apply to last char or char class only
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

/* lazy operator ?
"In regular expressions, a greedy match finds the longest possible part
of a string that fits the regex pattern and returns it as a match. The
alternative is called a lazy match, which finds the smallest possible
part of the string that satisfies the regex pattern."
Regular expressions are by default greedy
*/
//titanic
///t[a-z]*i/ = titani
///t[a-z]*?i/ = ti
let text = "<h1>Winter is coming</h1>";
///<.*>/ = whole phrase, but
let myRegex = /<.*?>/; // = <h1>
let result = text.match(myRegex);
//NOTE Parsing HTML with regular expressions should be avoided, but pattern
//matching an HTML string with regular expressions is completely fine.

//Write a greedy regex that finds one or more criminals within a group of other people.
//A criminal is represented by the capital letter C.
let reCriminals = /C+/;

//start anchor ^ to match at the beginning barrier
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false

//end anchor $ to match at the ending barrier
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false

//shorthand word character class \w = [a-zA-Z0-9_]
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
//alt exlet quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length; //32

//negative word character class \W = [^a-zA-Z0-9_]
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

//shorthand digit character class \d = [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length; //4

//negative digit character class \D = [^0-9]
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length; //17

/*
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z]{2,}$|^[a-zA-Z]+[0-9]{2,}$/;
let result = userCheck.test(username);

//shorthand whitespace character class \s = [ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]

//negative whitespace character class \S
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32

//quantity specifiers { and } for lower and upper range of count
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

//only the lower number of matches
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true

//exact number of matches
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false

//optional specifier for 0 or 1: ?
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

//look-aheads
/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further
along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't
actually match it. A positive lookahead is used as (?=...) where the ... is the required part that
is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is
not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want
to be there. The rest of the pattern is returned if the negative lookahead part is not present.
*/
//A more practical use of lookaheads is to check two or more patterns in one string. Here is a
//(naively) simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
//alt
let phrase1 = "I'm going to meet President Obama!";
let phrase2 = "I'm going to meet President Trump!";
console.log(/President (?=Obama)(?!Trump)/.test(phrase1)); //true
console.log(/President (?=Obama)(?!Trump)/.test(phrase2)); //false
//example
/* Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long,
do not begin with numbers, and have two consecutive digits. */
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=^\D+.*\d{2,})/;
let result = pwRegex.test(sampleWord);
//bana12 match
//abc123 match
//astr1on11aut match
//8pass99 fail

//mixed character groups
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); // Returns true
//alt
let myString = "Franklin D Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);

//capture groups - to find repeat substrings
/*"To specify where that repeat string will appear, you use a backslash (\) and
then a number. This number starts at 1 and increases with each additional capture
group you use. An example would be \1 to match the first group."*/
//The example below matches any word that occurs twice separated by a space:
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
//^ Using the .match() method on a string will return an array with the string it matches, along with its capture group.

//Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum); // true
//42 42 42 42 //false
//100 100 100 //true

//capture groups to search and replace
//"The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something."
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

//replace in place, or swap
//"You can also access capture groups in the replacement string with dollar signs ($)."
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"

/* Write a regex fixRegex using three capture groups that will search for each word in the
string "one two three". Then update the replaceText variable to replace "one two three" with
the string "three two one" and assign the result to the result variable. Make sure you are
utilizing capture groups in the replacement string using the dollar sign ($) syntax. */
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = '$3 $2 $1';
let result = str.replace(fixRegex, replaceText);

let str2 = "The quick brown fox jumps over the lazy dog.";
let fixRegex2 = /(quick).*(brown).*(fox)(.*)(lazy).*(dog)/;
console.log(str2.replace(fixRegex2, '$5 $6 $4 $1 $2 $3'));
// The lazy dog  jumps over the  quick brown fox.

//trim whitespace with regex
/* Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings. */
let hello = "   Hello, World!  ";
let wsRegex = /^(\s*)(.+?)(\s*)$/;
let result = hello.replace(wsRegex, '$2');
console.log(result);
//|Hello, World|