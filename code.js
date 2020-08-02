/*Ques 1.Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

My Answer:*/
let isSquare = function(n) {
let number = Math.sqrt(n);
return Number.isInteger(number);
};

//Good Answers:
//i.
function isSquare(n) {
return Math.sqrt(n) % 1 === 0;
}

//ii.
 const isSquare = n => Number.isInteger(Math.sqrt(n));

//Ques. 2. Counting the vowels in a given string. consider vowels as a,e,i,o,u.
/////
//My Answer:
let vowelsCount = 0;
function getCount(str) {
let vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < str.length; i++) {
for (let j = 0; j < vowels.length; j++) {
if (str[i] == vowels[j]) {
vowelsCount++;
}
}
}
return vowelsCount;
}

//Best Answer(modaf**ker used regex):
function getCount(str) {
return (str.match(/[aeiou]/ig)||[]).length;
}

//Good Answer:
//i.
function getCount(str) {
let vowelsCount = 0;
for (index in str){
switch (str[index]) {
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
vowelsCount++;
break;
}
}
return vowelsCount;
}

//ii. 
function getCount(str) {
for (let n = 0, i = 0; i < str.length; i++) {
let c = str.charCodeAt(i)
if (c === 97 || c === 101 || c === 105 || c === 111 || c === 117) n++
}

return n
}

/*Ques. 3: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]*/

//My Answer:

function array_diff(a, b) {
let max = a.length;
for (let i = 0; i < a.length; i++) {
for (let j = 0; j < b.length; j++) {
a[i] === b[j] && a.splice(max - (max - i), 1, null);
}
}
return a.filter(data => data !== null);
}

//Good answer:
//i.
function array_diff(a, b) {
return a.filter(function(x) { return b.indexOf(x) == -1; });
}

//ii.
function array_diff(a, b) {
return a.filter(e => !b.includes(e));
}

/*Ques. 4:Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

My Answer: Tried!!!!!!*/

//Good Answer:
function findOdd(arr) {
let count = 0;
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
if (arr[i] == arr[j]) {
count++;
}
}
if (count % 2 !== 0) {
return arr[i];
}
}
}


/*Bonus. From Javascript novice to ninja
Ques. Get the factors of any number.*/

//i.
 function factorsOf(n) {
const factors = [];
for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
if (n%i === 0){
factors.push(i,n/i);
}
}
return factors.sort((a,b) => a - b);
}

//ii.
 function factorsOf(n) {
const factors = [];
for (let i=1; i <= n ; i++) {
if (n/i === Math.floor(n/i)){
factors.push(i);
}
}
return factors;
}

//iii.
 function factorsOf(n) {
const factors = [];
for (let i=1; i <= n ; i++) {
if (n % i === 0){
factors.push(i);
}
}
return factors;
}


//Bonus Ques: To check for a prime number. A number divisible by only 1 and itself
function factorsOf(n) {
const factors = [];
for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
console.log(n / max);
if (n % i === 0) {
factors.push(i, n / i);
}
}
return factors.length === 2 ? true : false;
}

/*Ques. 5: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once.*/

//My Answer:
function factorChecker(n) {
let three = [];
let five = [];
for (let i = 0; i < n; i++) {
if (i % 3 === 0) {
three.push(i);
}
if (i % 5 === 0) {
five.push(i);
}
}

let combo = three.concat(five);

let sorter = combo.sort((a, b) => a - b);
console.log(sorter);
let num = 0;
for (let i = 0; i < sorter.length; i++) {
if (sorter[i] === sorter[i + 1]) {
sorter.splice(i, 1, 0);
}
console.log(sorter);
num = num + sorter[i];
}
return num;
}

/*Ques. 6: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.*/

//My Answer: 
function createPhoneNumber(numbers) {
let arr = [
"(",
numbers[0],
numbers[1],
numbers[2],
")",
" ",
numbers[3],
numbers[4],
numbers[5],
"-",
numbers[6],
numbers[7],
numbers[8],
numbers[9]
];
return arr.join("");
}

///////////////////////////OR//////////////////////////////////////

function createPhoneNumber(numbers){
let n = numbers;
return '('+n[0]+n[1]+n[2]+') '+n[3]+n[4]+n[5]+'-'+n[6]+n[7]+n[8]+n[9];
}

//Fine Answer:
 function createPhoneNumber(numbers){
let format = "(xxx) xxx-xxxx";

for(let i = 0; i < numbers.length; i++)
{
format = format.replace('x', numbers[i]);
}

return format;
}

//ii.
 function createPhoneNumber(numbers){
numbers = numbers.join('');
return '(' + numbers.substring(0, 3) + ') ' + numbers.substring(3, 6) + '-' + numbers.substring(6);
}

//iii.
 //Regex....
 function createPhoneNumber(numbers){
return numbers.join('').replace(/(...)(...)(.\*)/, '($1) $2-\$3');
}

//Ques. 7: Convert a number to roman numerals
//good answer 1: 
function solution(number){
let map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
output = '';

for (let i in map ) {
while ( number >= map[i] ) {
output += i;
number -= map[i];
}
}
return output;
}

//ii. 
function solution(number){
// convert the number to a roman numeral
let roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

let ans = '';
while(number>0){
for(a in roman){
if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

}
}
return ans;
}

//Ques 7. count the number of 1 in the binary of any integer

//my Answer:
 function countBits(n) {
// Program Me
let bin = n.toString(2);
let count = 0;
let arr = [...bin];

arr.map(n => {
n == 1 && count++;
});

return count;
}

//good answers: 
countBits = n => n.toString(2).split('0').join('').length;

/*Ques. 8: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

//My Answer: 
function isPangram(string) {
let alpha = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
];

let arr = [...string.toLowerCase()];
let newArr = [];
for (let i = 0; i < alpha.length; i++) {
for (let j = 0; j < arr.length; j++) {
if (alpha[i] == arr[j]) {
newArr.push(alpha[i]);
}
}
}

let originalArr = [];

newArr.map(n => !originalArr.includes(n) && originalArr.push(n));

return alpha.length === originalArr.length;
}

//good answers: 
function isPangram(string){
string = string.toLowerCase();
return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
return string.indexOf(x) !== -1;
});
}

//ii.
function isPangram(string){
return 'abcdefghijklmnopqrstuvwxyz'
.split('')
.every((x) => string.toLowerCase().includes(x));
}

//Ques 9. Write a function that capitalizes from the second index of a string seperated by either _ or -
//soln: 
function toCamelCase(str) {
let arr = str.split(/-|_/);
return arr
.splice(0, 1)
.concat(arr.map((n, i) => n.charAt(0).toUpperCase() + n.slice(1)))
.join("");
}

//Ques 10. <..////////..> solved for Ebere
//A function that checks if a number is a palindrome and returns it else it returns the next palindrome
//solution: 
function palinDrome(n) {
let arr = [];
let a = String(n);
for (let i = a.length - 1; i >= 0; i--) {
arr.push(a[i]);
}
let newArr = Number(arr.join(""));
if (n === newArr) {
return n;
} else {
while (n !== Number([...String(n)].reverse().join(""))) {
n++;
}
return n;
}
}

//Ques. 11. Write a program that will calculate the number of trailing zeros in a factorial of a given number.

//copied Answer: 
function zeros (n) {
let zs = 0;
while(n>0){
n=Math.floor(n/5);
zs+=n
}
return zs;
}

//ii. 
function zeros (n) {
let q = Math.floor(n/5);
return (q < 1)? 0 : q + zeros(q);
}

//iii.
function zeros (n) {
let count = 0;

do {
n = Math.floor(n/5);
count += n;
} while(n >= 5);

return count;
}

/*Ques 13: Once upon a time, on a way through the old wild west, a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
How I crossed the desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

or

{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };

or

[North, South, South, East, West, North, West]

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]

or

{ "WEST" }

or

[West]

Other examples:

In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
Task

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

    The Haskell version takes a list of directions with data Direction = North | East | West | South.
    The Clojure version returns nil when the path is reduced to nothing.
    The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.

See more examples in "Sample Tests:"
Notes

    Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

    if you want to translate, please ask before translating.*/

solution: function dirReduc(arr){
let oppositeDirections = {
NORTH: 'SOUTH',
SOUTH: 'NORTH',
WEST: 'EAST',
EAST: 'WEST'
};
let directions = arr.slice(0);
for (let i = 0; i < directions.length - 1;) {
if (oppositeDirections[directions[i]] === directions[i+1]) {
directions.splice(i, 2);
i = (i === 0) ? 0 : i - 1;
} else {
i += 1;
}
}
return directions;
}

//Hackerrank Quest.
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

solution:
function diagonalDifference(arr) {
// Write your code
let n = arr.length,a = 0, b = 0;

for(let i = 0; i < n; i++){
for(let j = 0; j < n; j++){  
 if(i == j){
a += arr[i][j]
}
if(i+j == n-1){
b += arr[i][j]
}
}
}
return Math.abs(a-b)
}

//ii.
function diagonalDifference(arr) {
// Write your code
let n = arr.length,a = 0, b = 0;

for(let i = 0; i < n; i++){
a += arr[i][i]
b += arr[i][n-i-1]
}
return Math.abs(a-b)
}

Quest: 
/*Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.*/

solution: let a = 0,
b = 0,
c = 0;
function plusMinus(arr) {
let n = arr.length;
for (let i = 0; i < n; i++) {
if (arr[i] > 0) {
a++;
} else if (arr[i] < 0) {
b++;
} else {
c++;
}
}

a = (a / n).toPrecision(6);
b = (b / n).toPrecision(6);
c = (c / n).toPrecision(6);
console.log(`${a}\n${b}\n${c}`);
}

//Ques Hackerrank: Print a staircase of size n using '#' and ' ' characters.
solution:
function main(n){
let space, hash, stair;

    for (let i = 0; i < n; i++){
        space = n - 1 - i;
        hash = i + 1;
        stair = ' '.repeat(space) + '#'.repeat(hash);
        console.log(stair);
    }
}

//Ques Codecademy: Write an array that returns the smallest number of two that is greater than given numbers in an array
solution
function powerOfTwo(arr) {
let a = [];
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
let power = 2;
while (arr[i] > power) {
power *= 2;
}
a.push(power);
}
return a;
}

/*Ques. Hackerrank: A left rotation operation on an array shifts each of the array's elements unit to the left. For example, if 2 left rotations are performed on array[1,2,3,4,5], then the array would become [3,4,5,1,2]
Given an array of integers and a number,n ,perform left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.*/

solution:

function rotLeft(a, d) {
while (d > 0) {
d--;
let c = a.shift();
a.push(c);
}
return a;
}

/*Hackerrank: John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
For example, there are n=7 socks with colors ar=[1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.*/

solution:
function sockMerchant(n, ar) {
let arr1 = [];
let arr = ar.sort();
for (let i = 0; i < n; i++) {
if (arr[i] === arr[i + 1]) {
arr1.push(arr[i]);
arr.splice(i, 2, undefined);
n--;
}
}
return arr1.length;
}

/*Question from chibuike cohort 3. Return the biggest number and the index of its containing row in a matrix*/
solution: 
function biggestNumber(arr) {
    let bigNum = -Infinity;
    let b;
    for (let i = 0; i < arr.length; i++) {
      for (let a of arr[i]) {
        if (a > bigNum) {
          bigNum = a;
        }
      }
      if (arr[i].indexOf(bigNum) != -1) {
        b = i;
      }
    }
    return `${bigNum} is the biggest number and it is in row ${b}`;
  }

  /* Complete the countingValleys function with U as uphill and D as downhill. Given a string ['UUDDUUU'] It must return an integer that denotes the number of valleys Gary traversed. */
   solution: 
  function countingValleys(n, str) {
    let a,
      b,
      c = 0,
      arr = [],
      arr1 = [];
    for (let i = 0; i < n; i++) {
      if (str[i].toLowerCase() == "u") {
        a = 1;
        arr.push(a);
      } else {
        b = -1;
        arr.push(b);
      }
      let ar = arr.reduce((a, b) => a + b);
      arr1.push(ar);
      if (arr1[i] == 0 && arr1[i - 1] == -1) c++;
    }
    return c;
  }

 /*ii*/  function countingValleys(n, str) {
  let count = 0;
  let stepsToSeaLevel = 0;
  
  for (let i = 0; i < n; i++) {
      if (str[i] == 'D' && stepsToSeaLevel == 0) {
          count++;
      }
      if (str[i] == 'D') {
          stepsToSeaLevel--;
      }
      if (str[i] == 'U') {
          stepsToSeaLevel++;
      }
  } 
  return (count);
} 

  /* Question from Chibuike: shuffle an input string */
  function shuffle(str) {
    let strLength = str.length;
    let strSplit = [...str];
    let randomNumber = Math.floor(Math.random() * strLength);
    let randomNumber1 = Math.floor(Math.random() * strLength);
    let cut = strSplit.splice(randomNumber, 1);
    let cut1 = strSplit.splice(randomNumber1, 2);
    return cut1
      .concat(cut)
      .concat(strSplit)
      .join("");
  }

  /*Return a given string argument as an object with the string as key and its length as value */
  function arr(str) {
    let obj = {};
    let n = str.length;
    console.log(n);
    obj[n] = str;
    return obj;
  }

  /*Hackerrank: Given an array [0,1,0,0,0,1,0], return an integer that signifies the minimum number of jumps taken by 0 */
//copied
function jumpingOnClouds(c) {

  let jump = -1;
  for (let i = 0; i < c.length; i++){
      if (c[i] == 0 && c[i + 1] == 0) {
          jump++;
          i++;
      }
      if (c[i] == 0 && c[i + 1] != 0) {
          jump++;
      }
  }
  return jump;
}

/*Hackerrank: Given a string and a number b as arguments, find the number of times alphabet 'a' occurs in b occurence of the string */copied
function repeatedString(s, n) {
  let numAs = 0;

  for (let letter of s) {
      if (letter == 'a') numAs++;
  }

  let multiples = parseInt(n / s.length);

  numAs *= multiples;

  let remainder = s.slice(0, n % s.length);

  for (let letter of remainder) {
      if (letter == 'a') numAs++;
  }

  return numAs;

}

/*ii.*/ function repeatedString(s, n) {
let repeat = Math.floor(n / s.length);
let remainder = n % s.length;
let answer = 0;
for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'a') {
        answer += repeat;
        if (i < remainder)
            answer++;
    }
}
return answer;
}

/*There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

 We calculate the following 16 hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18

Our highest hourglass value is 28 from the hourglass:

0 4 3
  1
8 6 6*/

solution:
function hourGlass(arr) {
  let ar = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let a =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      ar.push(a);
    }
  }
  return Math.max(...ar);
}

//Hackkerank interview
//convert ordinary time to military time
solution:
let d = timeConversion("12:01:00AM");
console.log(d);

function timeConversion(s) {
  let index = s.split(":")[0];
  let format = s.slice(-2);
  let firstIndex;

  if (format === "AM") {
    if (index === "12") {
      firstIndex = "00";
    } else if (index.length === 1) {
      firstIndex = "0" + index;
    } else {
      firstIndex = index;
    }
  } else {
    if (index === "12") {
      firstIndex = "12";
    } else {
      firstIndex = Number(index) + 12;
    }
  }
  let arr = [...s];
  index.length === 2 ? arr.splice(0, 2) : arr.splice(0, 1);
  arr.splice(-2);
  return firstIndex + arr.join("");
}

//Hackerrank Question
/*You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

    The first kangaroo starts at location 

and moves at a rate of
meters per jump.
The second kangaroo starts at location
and moves at a rate of

    meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO. Test case......kangaroo(0, 3, 4, 2)*/
solution:
function kangaroo(x1, v1, x2, v2) {
  let a = x1 + v1;
  let b = x2 + v2;
  let c;
  let counter = 0;

  if (v2 >= v1 && x2 > x1) {
    return "NO";
  }

  while (a !== b) {
    a += v1;
    b += v2;
    if (++counter > 10000) {
      return "NO";
    }
  }
  if (a == b) {
    c = "YES";
  } else {
    c = "NO";
  }

  return c;
}

// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by 1 from 1 at the front of the line to n at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if n = 8 and Person =5 bribes Person 4,the queue will look like this: 1,2,3,4,5,6,7,8.

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

function minimumBribes(q) {
  var min = q.length;
  var swap = 0;
  for (let i = q.length - 1; i >= 0; i--){
      if (q[i] - i > 3) {
          return "Too chaotic";
      }
      if (q[i] > (i + 1)) {
          swap += q[i] - (i + 1);
      } else {
          if (min > q[i]) {
              min = q[i];
          } else if(q[i] != min){
              swap++;
         }
     }
  }
  return swap;
}

// Comparing and filtering values in 2 different arrays

 const result = arr.filter(a => {
  return newArr.includes(a);
});

//Task 
// Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).
// Note: 0 is considered to be an even index.
// Input Format
// The first line contains an integer, T (the number of test cases). 
// Each line i of the T subsequent lines contain a String, S .

solution

function processData(input) {
  //Enter your code here
   let myArray = input.split('\n');
for (let i = 1; i <= myArray[0]; i++){
    let a = "", b = "";
for (let j = 0; j < myArray[i].length; j++) {
  if (j % 2 === 0) {
    a += myArray[i][j];
  } else {
    b += myArray[i][j];
  }
}
console.log(`${a} ${b}`);
}
} 

//Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.
function arrReverse(n,arr){
  return arr.reverse().join(' ')
  }

  //Given n names and phone numbers, assemble a phone book that maps friends' 
  //names to their respective phone numbers. You will then be given an unknown 
  //number of names to query your phone book for. For each name queried, print the 
  //associated entry from your phone book on a new line in the form name=phoneNumber; 
  //if an entry for name is not found, print Not found instead.

  //copied
  function processData1(input) {
    //Enter your code here
    const splitInput = input.split("\n");
    console.log(splitInput, "split");
    const phoneBookSize = +splitInput[0];
    console.log(phoneBookSize, "phone");
    const inputValue = splitInput.slice(phoneBookSize + 1);
    console.log(inputValue, "input");
    const temp = splitInput.slice(1, phoneBookSize + 1).map((list) => {
      let result = {
        name: list.split(" ")[0],
        phoneNumber: list.split(" ")[1],
      };
      return result;
    });
  
    let phoneBook = [];
    for (let list of temp) {
      phoneBook[list.name] = list.phoneNumber;
    }
    console.log(phoneBook, "phoneArray");
  
    for (let name of inputValue) {
      console.log(name, "name");
      if (phoneBook[name]) {
        console.log(`${name}=${phoneBook[name]}`);
      } else {
        console.log("Not found");
      }
    }
  }
  
  //Write a factorial function that takes a positive integer, N as a parameter and prints the result of N!(N factorial).
  function factorial(n) {

    if (n === 0)
   {
      return 1;
   }
    return n * factorial(n-1);
  }