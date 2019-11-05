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

//   let arr = [...string.toLowerCase()];
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

const a = palinDrome(19);
console.log(a);

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
