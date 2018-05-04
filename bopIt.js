function bopIt (cb) {
    setTimeout(function() {
        console.log("BOP IT")
        cb()
    }, 2000)
}

function pullIt(cb) {
    console.log("PULL IT")
    cb()
}

function twistIt(cb) {
    setTimeout(function() {
        console.log("TWIST IT")
        cb()
    }, 2000)
}

bopIt(function () {
    pullIt(function() {
        twistIt(function() {
            pullIt(function() {
                pullIt(function() {
                    bopIt(() => null)
                })
            })
        })
    })
})
