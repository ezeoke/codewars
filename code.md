Ques 1.Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

My Answer:
var isSquare = function(n) {
let number = Math.sqrt(n);
return Number.isInteger(number);
};

Good Answers:
i.function isSquare(n) {
return Math.sqrt(n) % 1 === 0;
}

ii. const isSquare = n => Number.isInteger(Math.sqrt(n));

///////////////////////////////////////////////////////////////////////////
Ques. 2. Counting the vowels in a given string. consider vowels as a,e,i,o,u.
/////
My Answer:
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
//////
Best Answer(modaf\*\*ker used regex):
function getCount(str) {
return (str.match(/[aeiou]/ig)||[]).length;
}
////////
Good Answer:
i.function getCount(str) {
var vowelsCount = 0;
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

ii. function getCount(str) {
for (var n = 0, i = 0; i < str.length; i++) {
var c = str.charCodeAt(i)
if (c === 97 || c === 101 || c === 105 || c === 111 || c === 117) n++
}

return n
}

/////////////////////////////////////////////////////////////////////////////////
Ques. 3: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
///////
My Answer:
function array_diff(a, b) {
let max = a.length;
for (let i = 0; i < a.length; i++) {
for (let j = 0; j < b.length; j++) {
a[i] === b[j] && a.splice(max - (max - i), 1, null);
}
}
return a.filter(data => data !== null);
}
//////
Good answer:
i.function array_diff(a, b) {
return a.filter(function(x) { return b.indexOf(x) == -1; });
}
ii.function array_diff(a, b) {
return a.filter(e => !b.includes(e));
}
////////////////////////////////////////////////////////////////////////////

Ques. 4:Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

My Answer: Tried!!!!!!

Good Answer:
function findOdd(arr) {
let result;
let count = 0;
arr = arr.sort()
for (let i = 0; i < arr.length; i++) {
if (arr[i] === arr[i +1]) {
count++;
if (count % 2 != 0) {
result = arr[i];
break;
}
}
}
return result;
}

///////////////////////////////////////////////////////////////////////////////
Bonus. From Javascript novice to ninja
Ques. Get the factors of any number.

i. function factorsOf(n) {
const factors = [];
for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
if (n%i === 0){
factors.push(i,n/i);
}
}
return factors.sort((a,b) => a - b);
}

/////////////////////This one is interesting/////////////////////////////////////////
ii. function factorsOf(n) {
const factors = [];
for (let i=1; i <= n ; i++) {
if (n/i === Math.floor(n/i)){
factors.push(i);
}
}
return factors;
}
////////////////////////////////////////////////////
iii. function factorsOf(n) {
const factors = [];
for (let i=1; i <= n ; i++) {
if (n % i === 0){
factors.push(i);
}
}
return factors;
}

//////////////////////////////////////////////////////////////////////
Bonus Ques: To check for a prime number. A number divisible by only 1 and itself
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

///////////////////////////////////////////////////////////////////////
Ques. 5: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once.

My Answer: function factorChecker(n) {
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

/////////////////////////////////////////////////////////////////////////
Ques. 6: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

My Answer: function createPhoneNumber(numbers) {
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
var n = numbers;
return '('+n[0]+n[1]+n[2]+') '+n[3]+n[4]+n[5]+'-'+n[6]+n[7]+n[8]+n[9];
}

Fine Answer: function createPhoneNumber(numbers){
var format = "(xxx) xxx-xxxx";

for(var i = 0; i < numbers.length; i++)
{
format = format.replace('x', numbers[i]);
}

return format;
}

ii. function createPhoneNumber(numbers){
numbers = numbers.join('');
return '(' + numbers.substring(0, 3) + ') ' + numbers.substring(3, 6) + '-' + numbers.substring(6);
}

iii. Regex....function createPhoneNumber(numbers){
return numbers.join('').replace(/(...)(...)(.\*)/, '($1) $2-\$3');
}

Ques. 7: Convert a number to roman numerals
good answer 1: function solution(number){
var map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
output = '';

for (var i in map ) {
while ( number >= map[i] ) {
output += i;
number -= map[i];
}
}
return output;
}

ii. function solution(number){
// convert the number to a roman numeral
var roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

var ans = '';
while(number>0){
for(a in roman){
if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

}
}
return ans;
}

///////////////////////////////////////////////////////////////////////////////////

Ques 7. count the number of 1 in the binary of any integer

my Answer: function countBits(n) {
// Program Me
let bin = n.toString(2);;
let count = 0;
let arr = [...bin];

arr.map(n => {
n == 1 && count++;
});

return count;
}

good answers: countBits = n => n.toString(2).split('0').join('').length;

///////////////////////////////////////////////////////////////////////////////
Ques. 8: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

My Answer: function isPangram(string) {
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

good answers: function isPangram(string){
string = string.toLowerCase();
return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
return string.indexOf(x) !== -1;
});
}

ii. function isPangram(string){
return 'abcdefghijklmnopqrstuvwxyz'
.split('')
.every((x) => string.toLowerCase().includes(x));
}

Ques 9. Write a function that capitalizes from the second index of a string seperated by either _ or -
soln: function toCamelCase(str) {
let arr = str.split(/-|_/);
return arr
.splice(0, 1)
.concat(arr.map((n, i) => n.charAt(0).toUpperCase() + n.slice(1)))
.join("");
}

Ques 10. <..////////..> solved for Ebere
A function that checks if a number is a palindrome and returns it else it returns the next palindrome
solution: function palinDrome(n) {
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

Ques. 11. Write a program that will calculate the number of trailing zeros in a factorial of a given number.

copied Answer: function zeros (n) {
var zs = 0;
while(n>0){
n=Math.floor(n/5);
zs+=n
}
return zs;
}

ii. function zeros (n) {
let q = Math.floor(n/5);
return (q < 1)? 0 : q + zeros(q);
}

iii. function zeros (n) {
let f = 0;

while (n >= 5) {
n = Math.floor(n / 5);
f += n;
}

return f;
}

iv. function zeros (n) {
var count = 0;

do {
n = Math.floor(n/5);
count += n;
} while(n >= 5);

return count;
}

Ques 12. How to convert figures to roman numerals
solution:
function solution(number) {
var map = {
M: 1000,
CM: 900,
D: 500,
CD: 400,
C: 100,
XC: 90,
L: 50,
XL: 40,
X: 10,
IX: 9,
V: 5,
IV: 4,
I: 1
},
output = "";

for (var i in map) {
while (number >= map[i]) {
output += i;
number -= map[i];
}
}
return output;
}

Ques 13: Once upon a time, on a way through the old wild west,…

… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
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

    if you want to translate, please ask before translating.

solution: function dirReduc(arr){
var oppositeDirections = {
NORTH: 'SOUTH',
SOUTH: 'NORTH',
WEST: 'EAST',
EAST: 'WEST'
};
var directions = arr.slice(0);
for (var i = 0; i < directions.length - 1;) {
if (oppositeDirections[directions[i]] === directions[i+1]) {
directions.splice(i, 2);
i = (i === 0) ? 0 : i - 1;
} else {
i += 1;
}
}
return directions;
}

Hackerrank Quest.
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

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

ii.function diagonalDifference(arr) {
// Write your code
let n = arr.length,a = 0, b = 0;

for(let i = 0; i < n; i++){
a += arr[i][i]
b ++ arr[i][n-i-1]
}
return Math.abs(a-b)
}
