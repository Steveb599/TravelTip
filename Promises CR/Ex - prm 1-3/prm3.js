'use strict'



add(fetchX(), fetchY())
    .then(console.log)

function add(prmX, prmY) {
    console.log('prmX,prmY', prmX, prmY)
    return Promise.all([prmX, prmY])
        .then(values => {
            console.log('values', values)
            return values[0] + values[1]
        })
        .catch(console.error)
}
// `fetchX()` should return a promise that is resolved to 25 immediately 

function fetchX() {
    return Promise.resolve(25)
}

// `fetchY()` should return a promise that is resolved after 2 seconds to 17
function fetchY() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(17)
        }, 2000)
    })
}

