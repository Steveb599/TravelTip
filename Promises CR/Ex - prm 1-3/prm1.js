'use strict'

compareToTen(15)
    .then(console.log)
    .catch(console.log)
compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error)) // Should Print: 8 is too small



function compareToTen(num) {
    if (num >= 10) return Promise.resolve(`${num} is valid`)
    return Promise.reject('Give me more...')
}