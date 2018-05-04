daftPunkPromise = new Promise((resolve, reject) => {
    console.log("LETS BEGIN")
    resolve()
})

workItPromise = new Promise(resolve => {
    setTimeout(resolve, 1000, 'Work it harder');
})

makeItPromise = new Promise(resolve => {
    setTimeout(resolve, 2000, 'Make it better');
})

doItPromise = new Promise(resolve => {
    setTimeout(resolve, 200, 'Do it faster');
})

makesUsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        true ? resolve('Makes us stronger') : reject('oh no!!!!')
    }, 4000);
})

daftPunkPromise
    .then(() => workItPromise)
    .then((value) => {
        console.log(value)
        return makeItPromise
    })
    .then((value) => {
        console.log(value)
        return doItPromise
    })
    .then((value) => {
        console.log(value)
        return makesUsPromise
    })
    .then((value) => {
        console.log(value)
    })

Promise.all([workItPromise, makeItPromise, doItPromise, makesUsPromise])
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log('oh no! Error:', error)
    })

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
})]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});