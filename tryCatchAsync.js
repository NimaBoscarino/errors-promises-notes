function doAsync() {
    console.log('about to do async')
    setTimeout(() => {
        console.log('DID ASYNC')
        throw new Error('WHOOMP THERE IT IS')
    }, 2000)
}

try {
    doAsync() // I will get an error
} catch (err) {
    // console.log('error', err)
    console.log('hello world')
}

console.log('outside of try/catch')