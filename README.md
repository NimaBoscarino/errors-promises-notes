# Week 4 Day 4: Errors and Promises

**REPO: https://github.com/NimaBoscarino/errors-promises-notes**

**Note: the book I mentioned in lecture (Async & Performance) is [available for free on Github](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance).**

#### As always, I recommend taking a look at the documentation:

1. [**Try ... Catch**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

2. [**Control Flow & Error Handling**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

3. [**Using Promises**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

4. [**Promises - MDN**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


### Learning about Try...Catch for handling errors in synchronous cases.
```js
try {
    // some code
    throw new Error("oh no an error!") // we could throw or own errors
    // or errors may happen due to bad references... etc.    
    var a = b + 3
} catch (err) {
    // catch!
    console.log(err)
}
```

Control flow in JS is not always linear, due to ASYNC stuff. So using try...catch doesn't always work. As we've seen over the past little while,
callbacks are a thing! 

### Errors and Callbacks
Error handling with callback functions can be done using:

1) Error-first callbacks
2) Success/fail callbacks

There are some issues with callbacks. Namely...

1) The Pyramid of Doom! (Or "callback hell")
2) Inversion of control (We're giving up the execution of our callbacks to the third-party libraries, so we have no control over WHEN the callbacks get executed, or how often they are executed)

This is bad! Lucky for us, we can use **Promises** to handle these things nicely.

### Promises

Promises let us reason about the future! Let's start with a scenario (adapted from [Kyle Simpson's book ASYNC & PERFORMANCE](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance)):
    
    I go to a burger place and order a burger. After paying, I receive a receipt from the cashier with my order number on it. This receipt is effectively an IOU ("I owe you") for the burger. After waiting around for a while, my order number is called and I can go exchange my receipt and pick up my burger. It's possible, however, that my order number gets called and I get told that the restaurant is out of stock of burger patties, and my order is refunded. Both of these are possible scenarios, and they can be handled gracefully.

So... main ideas to get with Promises are:

1) A promise is a state-machine. The initial state is PENDING. After some time, a promise may either RESOLVE with a value, or REJECT with an error. Either way, there is a payload.

2) Promises can be chained, which gives us a better way to write ASYNC code sequentially. (No more pyramid of doom!)

#### Creating Promises

```js
var p = new Promise((resolve, reject) => {
    // either call resolve(someValue) or reject(someError)
})

// short-hand for immediately resolved promise
var resolvedPromise = Promise.resolve("Woo!")
// short-hand for immediately rejected promise
var resolvedPromise = Promise.reject("Boooo!")
```

#### Then and Catch

Sometimes we want some code to execute *after* a section of ASYNC code. With promises, we can use .then().

```js
p = new Promise((resolve, reject) => {...}) // p is some promise

// the lambda only executes AFTER the promise is resolved
p.then(() => console.log('hello!')) 
```

See the `daftPunk.js` file for examples of using .then() to chain promises together and execute things sequentially. Compare this with `bopIt.js` to see how chaining things with Promises is nicer than using nested callbacks.

#### .race() and .all()

With .race(), we pass in an array of promises, and only return the resolution of the first promise to succeed. With .all() we return an array of all the resolved values. If any of the promises fail, the entire array of promises fails. See `daftPunk.js` for examples.

### READ THE DOCUMENTATION!!!
Have fun 🤖💻
- Nima Boscarino


