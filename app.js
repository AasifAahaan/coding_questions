const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});

app.use('/api', require('./routes/api.route'));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Coding Questions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("1. What are higher - order functions in JavaScript ?")
console.log("Ans. Higher-order functions are functions that can take other functions as arguments, return a function, or both.")

function withLogging(fn) {
  return function (...args) {
    console.log("Calling function with args:", args)
    return fn(...args)
  }
}

const add = (a, b) => a + b;
const addLogging = withLogging(add)
console.log(addLogging(2, 3))

console.log("2. What are closures in JavaScript?")
console.log("Ans. A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It retains access to the outer function’s variables even after the outer function has returned.")

function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter
  }
}

const increment = outer();
console.log(increment())
console.log(increment())

console.log("3. What are promises, and how do they work?")
console.log("Ans. Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. They have three states: pending, fulfilled, and rejected.")

// const promise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();

//   setTimeout(() => {
//     if (randomNumber > 0.5) {
//       resolve("Success!");
//     } else if (randomNumber > 0.2) {
//       reject("Failure!");
//     } else {
//       reject("Rejected due to timeout!");
//     }
//   }, 1000);
// });

// promise
//   .then(result => {
//     console.log({ state: "Fulfilled", result });
//   })
//   .catch(error => {
//     console.log({ state: "Rejected", error });
//   });


// console.log("......................... Reverse String ....................................")

// function reverseString(string) {
//   let reverse = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i];
//   }
//   return reverse
// }

// const givenString = reverseString("Aasif")
// console.log({ givenString })

// console.log("......................... Using Recursion ....................................")

// function reverseStrings(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseString(str.substr(1)) + str[0];
//   }
// }

// console.log(reverseStrings("Hello"))

// for (var i = 0; i < 4; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, i * 1000)
// }

// =========================================== Anagram string ===========================================
// function areAnagrams(str1, str2) {
//   str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
//   str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let sortedStr1 = str1.split('').sort().join('');
//   let sortedStr2 = str2.split('').sort().join('');

//   return sortedStr1 === sortedStr2;
// }

// console.log(areAnagrams('READ', 'DEAR')); 
// console.log(areAnagrams('MARY', 'ARMY')); 
// console.log(areAnagrams('HELLO', 'WORLD'));
// console.log(areAnagrams('AASIF', 'FISAA')); 


// const myArray = ["Pineapple", "Pomegrate", "Banana", "Apple"]
// myArray.splice(2, 0, "guvava", "Lemom")

// console.log(myArray)

function sortStudents(students, sortOrder) {
  students.sort((a, b) => {
    return sortOrder.indexOf(a.role) - sortOrder.indexOf(b.role);
  });
  return students;
}

var students = [
  { id: 5, role: "manager" },
  { id: 2, role: "developer" },
  { id: 4, role: "developer" },
  { id: 3, role: "tester" },
  { id: 1, role: "tester" }
];

var sortOrder = ['tester', 'developer', 'manager'];



var sortedStudents = sortStudents(students, sortOrder);
console.log(sortedStudents);

function sortBinaryArray(arr) {
  return arr.sort((a, b) => a - b);
}

var inputArray = [0, 1, 1, 1, 0, 0, 1, 0];
var sortedArray = sortBinaryArray(inputArray);
console.log(sortedArray);
