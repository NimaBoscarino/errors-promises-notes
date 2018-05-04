function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, time)
    })
}

function makeBopIt() {
    return new Promise((resolve, reject) => resolve())
} 

function bopIt() {
    console.log("Bop it!")
}

function pullIt() {
    console.log("Pull it!")
}

function twistIt() {
    console.log("Twist it!")
}

makeBopIt()
    .then(bopIt)
    .then(pullIt)
    .then(twistIt)
    .then(value => {
        throw Error('eek')
        return Promise.resolve({
            a : 23,
            b: "hello world"
        })
    })
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log('Oh no!', error)
    })
