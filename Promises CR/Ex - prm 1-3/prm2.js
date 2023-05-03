'use strict'

makeAllCaps(['cucumber', 'tomatos', 'avocado'])
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(['cucumber', 44, true])
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(console.error)

function makeAllCaps(words) {
    if (words.every(word => typeof word === 'string')) {
        return Promise.resolve(words.map(word => word.toUpperCase()))
    }
    return Promise.reject('not all strings')
}

function sortWords(words) {
    return words.sort()
}