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

// function sockMerchant(n, ar) {
//   let arr1 = [];
//   let arr = ar.sort();
//   for (let i = 0; i < n; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr1.push(arr[i]);
//       arr.splice(i, 2, undefined);
//       n--;
//     }
//   }
//   return arr1.length;
// }

// let b = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
// console.log(b);

function arr(...array) {
  let res = array.filter((a, b, c) => c.indexOf(a) !== b).sort();
  // console.log(res.length);
  if (res.length % 2 == 0) {
    // console.log("the length of dupliate element is an odd number");
    return false;
  }
  // console.log("the length of duplicate number is even");
}
arr(1, 2, 3, 2, 1, 4, 4);
let counta = {};
function sorta(...array) {
  let sortedArr = array.sort((a, b) => a - b);
  sortedArr.forEach((value) => {
    counta[value] = (counta[value] || 0) + 1;
  });
  // console.log(counta);
  let arrOfObj = Array.of(counta);
  console.log(arrOfObj);
  let result = arrOfObj
    .map((object) =>
      Object.keys(object).find((value) => object[value] % 2 !== 0)
    )
    .join("");
  return result;
}

// console.log(sorta(7, 7, 7, 1, 1, 7, 3, 3, 7, 7,  3, 3));

// function biggestNumber(arr) {
//   let bigNum = -Infinity;
//   let b;
//   for (let i = 0; i < arr.length; i++) {
//     for (let a of arr[i]) {
//       if (a > bigNum) {
//         bigNum = a;
//       }
//     }
//     if (arr[i].indexOf(bigNum) != -1) {
//       b = i;
//     }
//   }
//   return `${bigNum} is the biggest number and it is in row ${b}`;
// }

// let b = biggestNumber([
//   [7, 2, 3],
//   [4, 25, 3],
//   [3, 51, 16]
// ]);
// console.log(b);

// function valley(n, str) {
//   let a,
//     b,
//     c = 0,
//     arr = [],
//     arr1 = [];
//   for (let i = 0; i < n; i++) {
//     if (str[i] == "u" || str[i] == "U") {
//       a = 1;
//       arr.push(a);
//     } else {
//       b = -1;
//       arr.push(b);
//     }
//     let ar = arr.reduce((a, b) => a + b);
//     arr1.push(ar);
//     if (arr1[i] == 0 && arr1[i - 1] == -1) c++;
//   }
//   return c;
// }

function valley(n, str) {
  let a = 0,
    c = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] == "u" || str[i] == "U") {
      a++;
    } else {
      a--;
      if (a == -1) c++;
    }
  }
  return c;
}

let b = valley(8, "DDUUUUDD");
// console.log(b);

// function shuffle(str) {
//   let strLength = str.length;
//   let strSplit = [...str];
//   let randomNumber = Math.floor(Math.random() * strLength);
//   let randomNumber1 = Math.floor(Math.random() * strLength);
//   let cut = strSplit.splice(randomNumber, 1);
//   let cut1 = strSplit.splice(randomNumber1, 2);
//   return cut1
//     .concat(cut)
//     .concat(strSplit)
//     .join("");
// }

// // let a = shuffle("garble");
// // console.log(a);

// function convert(n) {
//   let roman = {
//     m: 1000,
//     cm: 900,
//     d: 500,
//     cd: 400,
//     c: 100,
//     xc: 90,
//     l: 50,
//     xl: 40,
//     x: 10,
//     ix: 9,
//     v: 5,
//     iv: 4,
//     i: 1
//   };
//   let output = "";
//   for (let a in roman) {
//     while (n >= roman[a]) {
//       output += a;
//       n -= roman[a];
//     }
//   }
//   return output.toUpperCase();
// }

// let a = convert(2519);
// // console.log(a);

// function palinDrome(n) {
//   let arr = [];
//   let a = String(n);
//   for (let i = a.length - 1; i >= 0; i--) {
//     arr.push(a[i]);
//   }
//   console.log(arr);
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

// let e = palinDrome(20);
// // console.log(e);

// function arr(str) {
//   let obj = {};
//   let n = str.length;
//   console.log(n);
//   obj[str] = n;
//   return obj;
// }

// let f = arr("aba");
// console.log(f);

function repeatedString(s, n) {
  let numAs = 0;

  for (let letter of s) {
    if (letter == "a") numAs++;
  }

  let multiples = parseInt(n / s.length);

  numAs *= multiples;

  let remainder = s.slice(0, n % s.length);

  for (let letter of remainder) {
    if (letter == "a") numAs++;
  }
  console.log(s.length);
  return numAs;
}

// let f = repeatedString(
//   "kjgjakajajajajajajalaannanama,aakajana nanahaaba abagagaaaaahahahajaja",
//   276768769789780
// );
// console.log(f);

// function countJump(...array) {
//   let strConv = String(array)
//     .split(",")
//     .join("");
//   let decimal = Math.floor(Math.log(strConv) / Math.log(10));
//   console.log(decimal);
// }

// let x = countJump(0, 0, 0, 1, 0, 0, 1, 0);

// function jumpingOnClouds(c) {
//   let jump = -1;
//   for (let i = 0; i < c.length; i++) {
//     if (c[i] == 0 && c[i + 1] == 0) {
//       jump++;
//       i++;
//       // console.log(i++);
//       // console.log(c[i], i);
//     }
//     if (c[i] == 0 && c[i + 1] != 0) {
//       jump++;
//     }
//   }
//   return jump;
// }

// let f = jumpingOnClouds([0, 0, 0, 0, 0, 0, 1, 0, 0, 1]);
// console.log(f);

// function numberConvert(n) {
//   let obj = {
//     twenty: 20,
//     nineteen: 19,
//     eighteen: 18,
//     seventeen: 17,
//     sixteen: 16,
//     fifteen: 15,
//     fourteen: 14,
//     thiteen: 13,
//     twelve: 12,
//     eleveen: 11,
//     ten: 10,
//     nine: 9,
//     eight: 8,
//     seven: 7,
//     six: 6,
//     five: 5,
//     four: 4,
//     three: 3,
//     two: 2,
//     one: 1
//   };
//   let b = "";
//   for (let a in obj) {
//     while (n >= obj[a]) {
//       b += a;
//       n -= obj[a];
//     }
//   }
//   return b;
// }

// let d = numberConvert(15);
// console.log(d);

// function generate(num, string, str) {
//   let count = 0;
//   let strArr = Array.apply(null, Array(num)).map(
//     String.prototype.valueOf,
//     string
//   );
//   let arrConvToStr = String(strArr)
//     .split(",")
//     .join("");
//   let res = arrConvToStr.slice(0, num);
//   for (let i = 0; i < res.length; i++) {
//     if (!res[i].indexOf(str)) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// generate(68, "babb", "a");

function arr(n) {
  let a = " ";
  let obj = {
    m: 1000,
    cm: 900,
    d: 500,
    cd: 400,
    c: 100,
    xc: 90,
    l: 50,
    xl: 40,
    x: 10,
    ix: 9,
    v: 5,
    iv: 4,
    I: 1,
  };

  for (let b in obj) {
    while (n >= obj[b]) {
      a += b;
      n -= obj[b];
    }
  }
  return a.toUpperCase();
}

let x = arr(499);
// console.log(x);

function jumpingOnClouds(c) {
  let jump = -1;
  for (let i = 0; i < c.length; i++) {
    if (c[i] == 0 && c[i + 1] == 0) {
      jump++;
      i++;
      // console.log(i++, "i");
    }
    if (c[i] == 0 && c[i + 1] != 0) {
      jump++;
    }
  }
  return jump;
}

let y = jumpingOnClouds([0, 1, 0, 0, 0, 1, 0, 0]);
// console.log(y);

function factors(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.length === 2;
}

function zeros(n) {
  let f = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    f += n;
    // console.log(n, "n");
  }

  return f;
}

function powerOfTwo(arr) {
  let ar = [];
  for (let i = 0; i < arr.length; i++) {
    let n = 1;
    while (n <= arr[i]) {
      n *= 2;
    }
    ar.push(n);
  }
  return ar;
}

function stairs(n) {
  let a = 0,
    b = 0;

  for (let i = 1; i <= n; i++) {
    a = i;
    b = n - i;
    let stair = "#".repeat(a) + "".repeat(b);
    console.log(stair);
  }
}

// stairs(20);

function sock(arr) {
  arr.sort();
  let ar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2, undefined);
      ar.push(arr[i]);
    }
  }
  return ar.length;
}

// function occur(str, n) {
//   let c = 0;
//   let a = Math.floor(n / str.length);
//   let b = n % str.length;
//   for (let s of str) {
//     if (a === "a") {
//       c+=a
//     }
//   }

//   for (let s of str) {
//     if (a === "a") {
//       c+=a
//     }
//   }

// }

// function occur(str, b) {
//   let a = Math.floor(b / str.length);
//   let rem = b % str.length;
//   let c = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       c += a;
//       if (i < rem) {
//         c++;
//       }
//     }
//   }
//   return c;
// }

// function cloud(str, n) {
//   let count = 0;
//   let stepsDown = 0;
//   for (let i = 0; i < n; i++) {
//     if (str[i] === "D" && stepsDown === 0) {
//       count++;
//     }
//     if (str[i] === "D") {
//       stepsDown--;
//     }
//     if (str[i] === "U") {
//       stepsDown++;
//     }
//   }
//   return count;
// }

// function palinDrome(n) {
//   let arr = [];
//   let a = [...String(n)].reverse();
//   let newArr = Number(a.join(""));
//   if (n === newArr) {
//     return n;
//   } else {
//     while (n !== Number([...String(n)].reverse().join(""))) {
//       n++;
//     }
//     return n;
//   }
// }

// function hourGlass(arr) {
//   let ar = [];
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = 0; j < arr[i].length - 2; j++) {
//       let a =
//       arr[i][j] +
//         arr[i][j + 1] +
//         arr[i][j + 2] +
//         arr[i + 1][j + 1] +
//         arr[i + 2][j] +
//         arr[i + 2][j + 1] +
//         arr[i + 2][j + 2];
//       console.log(a);
//       ar.push(a);
//     }
//   }
//   return Math.max(...ar);
// }

// function timeConversion(s) {
//   let index = s.split(":")[0];
//   let index1 = s.split(":")[1];
//   let index2 = s.split(":")[2].slice(0, 2);

//   let format = s.slice(-2);
//   let firstIndex;
//   if (format === "AM") {
//     if (index === "12") {
//       firstIndex = "00";
//     } else if (index.length === 1) {
//       firstIndex = "0" + index;
//     } else {
//       firstIndex = index;
//     }
//   } else {
//     if (index === "12") {
//       firstIndex = "12";
//     } else {
//       firstIndex = Number(index) + 12;
//     }
//   }
//   let arr = [...s];
//   index.length === 2 ? arr.splice(0, 2) : arr.splice(0, 1);
//   arr.splice(-2);
//   return firstIndex + arr.join("");
// }

// function kangaroo(x1, v1, x2, v2) {
//   let a = x1 + v1;
//   let b = x2 + v2;
//   let c;
//   let counter = 0;

//   if (v2 >= v1 && x2 > x1) {
//     return "NO";
//   }

//   while (a !== b) {
//     a += v1;
//     b += v2;
//     if (++counter > 10000) {
//       return "NO";
//     }
//   }
//   if (a == b) {
//     c = "YES";
//   } else {
//     c = "NO";
//   }

//   return c;
// }
[1, 2, 3, 4, 5];
let d = minimumBribes(5, [2, 1, 5, 3, 4]);
// console.log(d);

function minimumBribes(q, arr) {
  let ar = arr.sort();
  let arr1 = [];
  for (let i = 0; i < q; i++) {
    for (let j = 0; j < q; j++) {
      // console.log(j, "aba");
      // if (ar[j] === arr[i]) {
      //   arr1.push(ar[i]);
      // }
    }
  }
  return arr1;
}

let position = (array) => {
  let arr = [1, 2, 3, 4, 5];
  let empArr = [];
  let co = 0;
  array.forEach((element, i) => {
    // console.log(arr.indexOf(element));
    if (arr.includes(array[i])) {
      if (arr[i] !== array[i]) {
        i--;
        if (arr[i] < array[i]) {
          co++;
          empArr.push(array[i]);
        }
      }
    }
  });
  // console.log(empArr);
  // console.log(co);
};
position([2, 1, 5, 3, 4]);

// function minimumBribes(q) {

//   let bribeCount = []
//   let high = 0;

//   for (let i = 0; i < q.length; i++) {
//       let val = q[i]
//       bribeCount[val] = 0
//       high = Math.max(val, high)  // update the highest value encountered

//       if (val < high) {
//           // if current value < high value, increment value for all bribeCount indices > val
//           for (let j = val + 1; j < bribeCount.length; j++) {
//               bribeCount[j]++
//               if (bribeCount[j] > 2) {
//                   console.log("Too chaotic")
//                   return;
//               }
//           }
//       }
//   }
//   const sum = bribeCount.reduce((a, b) => a + b, 0)  // sum
//   console.log(sum);
// }

// function sorter(arr) {
//   let last;
//   for (let i = 0; i <= arr.length; i++) {
//     last = arr.slice(arr.length - 2, arr.length - 1);
//   }
//   console.log("last", last);
//   return last;
// }

// sorter([1, 2, 4, 5]);

// let vowels = ['a']
// function alpha

// function sortq(arr) {
//   console.log(arr);
//   arr.sort((a, b) => a - b);
//   return arr;
// }

// let i = sortq([3, 2, 4, 7]);
// console.log(i);
// function factorial(num) {
//   let sum = 1;
//   for (let i = num; i >= 1; i--) {
//     sum *= i;
//   }
//   return sum;
// }

// let n = factorial(3);
// console.log(n);

// let count = 0;
// function sen(newArr) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i <= newArr.length; i++) {
//     for (let j = 0; j <= vowels.length; j++) {
//       if (newArr[i] == vowels[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// let babas = sen("weebaa");
// // console.log(babas);

// var array1 = ["a", "b", "c", "d", "e"];
// var array2 = ["b", "d", "f"];

// array1 = array1.filter(function(item) {
//   return !array2.includes(item);
// });

// console.log(array1, "array1");
// console.log(array2, "array2");

// function solution(number) {
//   let map = {
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

//   for (let i in map) {
//     while (number >= map[i]) {
//       output += i;
//       number -= map[i];
//     }
//   }
//   return output;
// }

// countBits = n => {
//   console.log(n.toString(2).split("0"));
//   return n
//     .toString(2)
//     .split("0")
//     .join("").length;
// };

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

//   let arr = [...string.toLowerCase()];
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < alpha.length; j++) {
//       if (alpha[j] == arr[i]) {
//         newArr.push(alpha[j]);
//       }
//     }
//   }
//   console.log(newArr);

//   let originalArr = [];

//   newArr.map(n => !originalArr.includes(n) && originalArr.push(n));

//   return alpha.length === originalArr.length;
// }

// function palinDrome(n) {
//   let arr = [];
//   let a = String(n);
//   for (let i = a.length - 1; i >= 0; i--) {
//     arr.push(a[i]);
//   }
//   let newArr = Number(arr.join(""));
//   console.log(Number([...a].reverse().join("")));
//   console.log(newArr);
//   console.log(arr.slice(1));

//   if (n === newArr) {
//     return n;
//   } else {
//     while (n !== Number([...String(n)].reverse().join(""))) {
//       n++;
//     }
//     return n;
//   }
// }

// let a = palinDrome(345);
// console.log(a);

// qualifications = [
//   { id: 1, name: "boy" },
//   { id: 2, name: "girl" },
//   { id: 3, name: "man" },
//   { id: 4, name: "woman" }
// ];
// arr = [1, 1, 2];

// let arr3 = qualifications.filter(item => {
//   return arr.includes(item.id);
// });

// console.log(arr3);

function solve(meal_cost, tip_percent, tax_percent) {
  let tip = (tip_percent / 100) * meal_cost;
  let tax = (tax_percent / 100) * meal_cost;
  let cost = meal_cost + tip + tax;
  return Math.round(cost);
}

let a = solve(12.0, 20, 8);
// console.log(a);

function processData(input) {
  // for (let j = 0; j <= input[0]; j++) {
  let a = "",
    b = "";
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      a = a + input[i];
    } else {
      b = b + input[i];
    }
  }
  console.log(`${a} ${b}`);
  // }
}

// processData("rank");

// function getCount(str) {
//   let vowelsCount = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (str[i] == vowels[j]) {
//         vowelsCount++;
//       }
//     }
//   }
//   return vowelsCount;
// }

// let vowel = getCount("befejfdjdkjhbjbjhbeeunn");
// // console.log(vowel);

// function timeConversion(s) {
//   let index = s.split(":")[0];
//   let format = s.slice(-2);
//   let firstIndex;

//   if (format === "AM" || format === "am") {
//     if (index === "12") {
//       firstIndex = "00";
//     } else if (index.length === 1) {
//       firstIndex = "0" + index;
//     } else {
//       firstIndex = index;
//     }
//   } else {
//     if (index === "12") {
//       firstIndex = "12";
//     } else {
//       firstIndex = Number(index) + 12;
//     }
//   }
//   let arr = [...s];
//   index.length === 2 ? arr.splice(0, 2) : arr.splice(0, 1);
//   arr.splice(-2);
//   return firstIndex + arr.join("");
// }

// let date = [..."2020-06-26T23:00:00.000Z"];

// const biro = date.splice(11, 5, "23:49").join("");

// // const aba = timeConversion("12:00 am");
// console.log(date.join(""));
// const time = "23:49 ";
// time.slice(-1);
// console.log(
//   new Date("2020-09-15T23:00:00.000Z").format("MMMM Do YYYY, h:mm:ss a")
// );

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

function factors(n) {
  let binaryN = n.toString(2);
  let binary = binaryN.split("0");
  console.log(binary);
  let count = 0;
  let len = 0;
  for (let n = 0; n < binary.length; n++) {
    len = binary[n].length;
    // console.log(len);
    if (len > count) {
      count = len;
    }
  }
  return count;
}

let xa = factors(439);
// console.log(xa);
