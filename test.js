// function persistence(num) {

//   let str = String(num);
//   let arr = str.split("");
//   let result = 1;

// // // // //   for (let i = 0; i < arr.length; i++) {
// // // // //     result = result * arr[i];
// // // // //   }

// // // // //   return result;
// // // // // }

// // // // // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// // // // // For example:

// // // // //  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // // // //                        // and 4 has only one digit

// // // // //  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// // // // //                         // 1*2*6 = 12, and finally 1*2 = 2

// // // // //  persistence(4) === 0 // because 4 is already a one-digit number

// function persistence(num) {
//   function multiply(n) {
//     return n.reduce(function(a, b) {
//       return a * b;
//     });
//   }
//   var count = 0;

//   while (num.toString().length > 1) {
//     num = num.toString().split("");
//     num = multiply(num);
//     count++;
//   }
//   return count;
// }

// // // // console.log(persistence(980526));

// // function array_diff(a, b) {
// //   let max = a.length;
// //   for (let i = 0; i < a.length; i++) {
// //     for (let j = 0; j < b.length; j++) {
// //       a[i] === b[j] && a.splice(max - (max - i), 1, null);
// //     }
// //   }
// //   return a.filter(data => data !== null);
// // }

// // // // console.log(array_diff([5, 2, 1, 2, 2, 4, 7, 6, 5], [1, 2, 5]));

// // // console.log(findOdd([3, 3, 1, 2, 2, 2, 1, 1, 2, 2, 3, 4]));

// function findOdd(arr) {
//   let result;
//   let count;
//   arr.sort();
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//         if (count % 2 !== 0) {
//           result = arr[i];
//           break;
//         }
//       }
//     }
//   }
//   return result;
// }

// function factorsOf(n) {
//   const factors = [];
//   for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
//     console.log(n / max);
//     if (n % i === 0) {
//       factors.push(i, n / i);
//     }
//   }
//   return factors.sort((a, b) => a - b);
// }
// function factorsOf(n) {
//   const factors = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       factors.push(i);
//     }
//   }
//   return factors;
// }

// // let f = factorsOf(1);
// // console.log(f);

// function isPrime(n) {
//   for (let i = 2; (i = n - 1); i++) {
//     if (!n % i === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// let p = isPrime(3);

// console.log(p);

// function factorChecker(n) {
//   let three = [];
//   let five = [];
//   for (let i = 0; i < n; i++) {
//     if (i % 3 === 0) {
//       three.push(i);
//     }
//     if (i % 5 === 0) {
//       five.push(i);
//     }
//   }

//   let combo = three.concat(five);

//   let sorter = combo.sort((a, b) => a - b);
//   console.log(sorter);
//   let num = 0;
//   for (let i = 0; i < sorter.length; i++) {
//     if (sorter[i] === sorter[i + 1]) {
//       sorter.splice(i, 1, 0);
//     }
//     console.log(sorter);
//     num = num + sorter[i];
//   }
//   return num;
// }

// let result = check(10);
// console.log(result);

// function generate(a, b=1){
//   let num;
// if(!a){
//   [a,b] = [b,a]
// num = Math.floor(Math.random() )
// }
// }

// function random(a, b = 1) {
//   // if only 1 argument is provided, we need to swap the values of a and b
//   if (b === 1) {
//     [a, b] = [b, a];
//     console.log("ohm npa");
//   }
//   return Math.floor((b - a + 1) * Math.random()) + a;
// }

// let b = random(66, 45);

// console.log(b);

// function outer() {
//   const outside = "Outside!";
//   function inner() {
//     const inside = "Inside!";
//     console.log(outside);
//     console.log(inside);
//   }
//   return inner;
// }

// const logger = outer();
// logger();

// function counter(start) {
//   let i = start;
//   return function() {
//     console.log(i++);
//   };
// }

// const count = counter(1);
// count();
// count();
// count();

// function createPhoneNumber(numbers) {
//   let arr = [
//     "(",
//     numbers[0],
//     numbers[1],
//     numbers[2],
//     ")",
//     " ",
//     numbers[3],
//     numbers[4],
//     numbers[5],
//     "-",
//     numbers[6],
//     numbers[7],
//     numbers[8],
//     numbers[9]
//   ];
//   return arr.join("");
// }

// let two = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// console.log(two);
// console.log(na);

// function bouncingBall(h, bounce, window) {
//   // your code here
//   // let n;
//   return h > 0 && window < h && (bounce > 0 && bounce < 1) ? 1 : -1;
// }

// let b = bouncingBall(5, 0.9, 6);
// console.log(b);

// function isValidIP(str) {
//   return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// }

// let t = isValidIP("5.456.1.5");
// console.log(t);

// function isValidIP(str) {
//   let arr = str.split(".");
//   let [a, b, c, d] = arr;

//   return arr.length === 4 &&
//     (a >= 0 && a <= 255 && Number.isInteger(Number(a))) &&
//     (b >= 0 && b <= 255 && Number.isInteger(Number(b))) &&
//     (c >= 0 && c <= 255 && Number.isInteger(Number(c))) &&
//     (d >= 0 && d <= 255 && Number.isInteger(Number(d)))
//     ? true
//     : false;
// }

// function isValidIP(str) {
//   let re = new RegExp("[0-9]+.[0-9]+.[0-9]+.[0-9]+");

//   return re.test(str);
// }

// function isPrime(num) {
//   return (
//     num > 1 && (num === 2 || num === 3 || (num % 2 !== 0 && num % 3 !== 0))
//   );
// }

// let prime = isPrime(47);
// console.log(prime);

// function countBits(n) {
//   // Program Me
//   let bin = n.toString(2);
//   console.log(bin);
//   let count = 0;
//   for (let i = 0; i < bin.length; i++) {
//     if (bin[i] === "1") {
//       count++;
//       console.log(bin[i]);
//     }
//   }
//   return count;
// }

// function countBits(n) {
//   // Program Me
//   let bin = n.toString(2);
//   let count = 0;
//   let arr = [...bin];

//   arr.map(n => {
//     n == 1 && count++;
//   });

//   return count;
// }

// let b = countBits(500);
// console.log(b);

// function isPangram(string) {
//   let alpha = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z"
//   ];

//   let arr = [...string];
//   let newArr = [];
//   for (let i = 0; i < alpha.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (alpha[i] == arr[j]) {
//         newArr.push(alpha[i]);
//       }
//     }
//   }

//   let originalArr = [];

//   newArr.map(n => !originalArr.includes(n) && originalArr.push(n));

//   return alpha.length === originalArr.length;
// }

// let b = isPangram("jErlhtferjktheeeeeeeeeeeeerj");
// console.log(b);

// function toCamelCase(str) {
//   let arr = str.split(/-|_/);
//   return arr
//     .splice(0, 1)
//     .concat(arr.map((n, i) => n.charAt(0).toUpperCase() + n.slice(1)))
//     .join("");
// }

// const a = toCamelCase("the_stealth-warrior");
// console.log(a);

// function zeros(n) {
//   let num = 1;
//   for (let i = n; i > 0; i--) {
//     // console.log(i, "i");
//     num = num * i;
//   }
//   console.log(num, String(num)[1]);
//   return num;
// }

// let count = 0;
// function back(num) {
//   let arr = String(num);
//   console.log(arr[0], 1);

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == 0) {
//       if (arr[i - 1] != 0) {
//         break;
//       }
//       count++;
//     }
//   }
//   return count + 1;
// }

// let b = back(100001000000);

// console.log(b);

// const userName = prompt("what is your username?");

// const age = prompt("what is your age");

// if (userName == "ebere") {
//   if (age >= 12 && age <= 22) {
//     alert(`Access Granted to ${userName}`);
//   } else {
//     alert("Access Denied");
//   }
// } else {
//   alert("Wrong Username");
// }

// function palinDrome(str) {
//   return [...str].reverse().join("") === str;
// }

// const a = palinDrome("eye");
// console.log(a);

// function palinDrome(n) {
//   let arr = [];
//   let a = String(n);
//   for (let i = a.length - 1; i >= 0; i--) {
//     arr.push(a[i]);
//   }
//   let newArr = Number(arr.join(""));
//   if (n === newArr) {
//     return n;
//   } else {
//     while (n !== Number([...String(n)].reverse().join(""))) {
//       n++;
//     }
//     return n;
//   }
// }

// const a = palinDrome(19);
// console.log(a);

// let count = 0;
// function zeros(n) {
//   let num = 1;
//   for (let i = n; i > 0; i--) {
//     num = num * i;
//   }
//   let arr = String(num);
//   console.log(parseInt(arr));

//   let arrLength = arr.length - 1;
//   // console.log(arrLength);
//   for (let i = arrLength; i >= 0; i--) {
//     if (arr[i] == 0) {
//       if (arr[i - 1] != 0) {
//         break;
//       }
//       count++;
//     }
//   }
//   return count + 1;
// }

// const a = zeros(30);
// console.log(a);

// function zeros(n) {
//   var count = 0;

//   do {
//     n = Math.floor(n / 5);
//     count += n;
//   } while (n >= 5);

//   return count;
// }

// const z = zeros(500000);
// console.log(z);

// let a = 1;
// let b = a;
// // console.log(a);
// console.log(b);
// function alpha() {
//   return (a = 2);
// }

// function beta() {
//   console.log(a, "beta");
// }

// // alpha();
// console.log(a);
// beta();

// let two = 1;
// for (let i = 1; i <= 10; i++) {
//   two *= 2;
// }
// console.log(two);
// console.log(2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2);
// function solution(number) {
//   var map = {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1
//     },
//     output = "";

//   for (var i in map) {
//     while (number >= map[i]) {
//       output += i;
//       number -= map[i];
//     }
//   }
//   return output;
// }
// const a = solution(48);
// console.log(a);

// function dirReduc(arr) {
//   let newArr1 = ("north", "south");
//   let newArr2 = ("east", "west");
//   let newArr3 = ("south", "north");
//   let newArr4 = ("west", "east");
//   // console.log(arr, 0);
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       (arr[i], arr[i + 1] == newArr1) ||
//       (arr[i], arr[i + 1] == newArr2) ||
//       (arr[i], arr[i + 1] == newArr3) ||
//       (arr[i], arr[i + 1] == newArr4)
//     ) {
//       arr.splice(i, 2);
//       // console.log(arr, 1);
//       // console.log(arr.splice(i, 2), 3);
//     }
//   }
//   // console.log(arr, 2);
//   return arr;
// }

// const ab = dirReduc(["south", "north", "east", "north", "west", "south"]);
// console.log(ab);

// function isSquare(n) {
//   return Math.sqrt(n) % 1 == 0;
// }

// let baba = isSquare(36);
// console.log(baba);

// function vowelsCount(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let n = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (vowels[j] == str[i]) {
//         n++;
//       }
//     }
//   }
//   return n;
// }

// let baba = vowelsCount("abaeba");
// console.log(baba);

// function unique(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (b[j] == a[i]) {
//         a.splice(i, 1, null);
//       }
//     }
//   }
//   return a.filter(n => n !== null);
// }

// let ba = unique([1, 3, 5, 6, 4, 3], [3, 4]);
// console.log(ba);

// let animal = "cat";
// let str = [...animal];
// str.splice(0, 1, "r");
// console.log(str.join(""));

// function min(...args) {
//   let n = Infinity;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] < n) n = args[i];
//   }
//   return n;
// }

// let n = min(200, 1, 0.4, 56, 6, -0.8, 0.2, 78);
// console.log(n);

// Complete the compareTriplets function below.
// function compareTriplets(a, b) {
//   let c = 0,
//     d = 0;
//   if (a[0] < b[0]) {
//     d++;
//   } else if (a[0] > b[0]) {
//     c++;
//   }
//   if (a[1] < b[1]) {
//     d++;
//   } else if (a[1] > b[1]) {
//     c++;
//   }
//   if (a[2] < b[2]) {
//     d++;
//   } else if (a[2] > b[2]) {
//     c++;
//   }

//   return [c, d];
// }

// let a = compareTriplets([1, 2, 3], [3, 2, 1]);
// console.log(a);

// let a = 0,
//   b = 0,
//   c = 0;
// function plusMinus(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > 0) {
//       a++;
//     } else if (arr[i] < 0) {
//       b++;
//     } else {
//       c++;
//     }
//   }

//   a = (a / n).toPrecision(6);
//   b = (b / n).toPrecision(6);
//   c = (c / n).toPrecision(6);
//   console.log(`${a}\n${b}\n${c}`);
// }

// let n = plusMinus([-4, 3, -9, 0, 4, 1]);
// console.log(n);

// function staircase(n) {
//   let space, hash, stair;

//   for (let i = 0; i < n; i++) {
//     space = n - 1 - i;
//     hash = i + 1;
//     stair = " ".repeat(space) + "#".repeat(hash);
//     console.log(stair);
//   }
// }

// let b = staircase(10);

// function staircase(n) {
//   let stair,
//     hash = 0,
//     space = 0;
//   for (let i = 0; i < n; i++) {
//     hash = i + 1;
//     space = n - i - 1;
//     stair = " ".repeat(space) + "#".repeat(hash);
//     console.log(stair);
//   }
// }

// function powerOfTwo(arr) {
//   let a = [];
//   for (let i = 0; i < arr.length; i++) {
//     let power = 2;
//     while (arr[i] > power) {
//       power *= 2;
//     }
//     a.push(power);
//   }
//   return a;
// }

// let b = powerOfTwo([5, 3, 9, 2, 30]);
// console.log(b);

// function rotLeft(a, d) {
//   while (d > 0) {
//     d--;
//     let c = a.shift();
//     a.push(c);
//     console.log(c);
//   }
//   return a;
// }

// const e = rotLeft([1, 2, 3, 4, 5, 6], 4);

// const f = console.log(e);

// var points = [40, 100, 1, 5, 25, 10];
// let a = points.sort((a, b) => a - b);
// console.log(a);

// function arr(...array) {
//   let res = array.filter((a, b, c) => c.indexOf(a) !== b).sort();
//   console.log(res.length);
//   if (res.length % 2 == 0) {
//     console.log("the length of dupliate element is an odd number");
//     return false;
//   }
//   // console.log("the length of duplicate number is even");
// }
// arr(1, 2, 2, 1, 5, 4, 4);
// let counta = {};
// function sorta(...array) {
//   let sortedArr = array.sort((a, b) => a - b);
//   sortedArr.forEach(value => {
//     counta[value] = (counta[value] || 0) + 1;
//   });
//   console.log(counta);
//   let arrOfObj = Array.of(counta);
//   console.log(arrOfObj);
//   arrOfObj.map(object =>
//     Object.keys(object).filter(value => {
//       // if (object[value] % 2 == 0) {
//       //   console.log(value + " have length of even");
//       //   return value;
//       // }
//       if (object[value] % 2 !== 0) {
//         console.log(value + " have length of odd");
//         return value;
//       }
//     })
//   );
// }
// sorta(7, 7, 5, 5, 6, 6, 8, 9, 1);

// function findOdd(arr) {
//   var count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count++;
//       }
//     }
//     if (count % 2 !== 0) {
//       return arr[i];
//     }
//   }
// }

// let a = findOdd([3, 3, 1, 1, 7, 8, 8, 9, 9]);
// console.log(a);

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

let b = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(b);
