# W4 D4: Errors and Promises

## Here are some examples of real-life errors and promises that I've made

Errors:

- didn't invest in bitcoin
    - Cried a bit
- bought an XBOX 360 way too late
    - Had to make new online friends
- Bought Skyrim (400 - 600 hours)
    - Just having fun and not worrying about it too much

Promises:

- Would finish undergrad in 4 years
    - Didn't! But it's okay, I deal with it eventually.
- Reach these keeds
    - Kinda, and then I move on to reaching other keeds.
- Get into fantastic shape
    - I did! But I can always do better, keep going.

## Goals for today's lecture:

- Try/Catch/Finally + control flow w/ Errors in Javascript
- Errors in ASYNC code
- Promises and their benefits (except in Javascript)

```js
    let workingRelationship = false
    function continueWithRelationship() {
        // trying to cash out
        // as part of the logic, it NEEDS me to have invested in bitcoin

        throw new Error("You can't parallel park very well")
    }

    // something's gonna go wrong!
    // this could cause a crash
    // relationship might not work
    
    try {
        continueWithRelationship()
        cashOutBitcoin()
        attemptA4PlateSquat()
    } catch (itDidntWork) {
        console.log(itDidntWork)
    } finally {
        // run regardless of whether you have an error or not
    }

```

## Control Flow

- order in which code is executed might be disrupted by exceptions/errors popping up

## Exceptional Situations cause things to fail

```js
    /*
    if (!fileExists) {
        // throw new Error('File does not exist')

    }
    */

    let file = readFileSync('hellowrld.js')
    console.log(file) // undefined
```

## ASYNC

```js

    try {
        let file = readFileAsync('hellowrld.js', (file) => {
            console.log(file) // undefined
        })
    } catch (error) {
        console.log(error)
    }

    // yada yada
   
```

## With Error-First Callbacks

```js

    // cb('There was an error')
    // cb(null, file)

    let file = readFileAsync('hellowrld.js', (err, file) => {
        if (err) {
            // handle it
        } else {
            console.log(file) // undefined
        }
    })

    // yada yada
   
```

## Success-Fail Callbacks

```js

    // success()

    // fail()

    let file = readFileAsync('hellowrld.js', (file) => {
        console.log(file) // undefined
    }, (err) => {
        // something went wrong
    })

    // yada yada
   
```

-- why do we need the NEW keyword when making a promise
-- catch situation -- more into that