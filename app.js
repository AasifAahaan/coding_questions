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

const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  
  setTimeout(() => {
    if (randomNumber > 0.5) {
      resolve("Success!");
    } else if (randomNumber > 0.2) {
      reject("Failure!");
    } else {
      console.log("Still pending...");
    }
  }, 1000);
});

promise
  .then(result => {
    console.log({ state: "Fulfilled", result });
  })
  .catch(error => {
    console.log({ state: "Rejected", error });
  });

