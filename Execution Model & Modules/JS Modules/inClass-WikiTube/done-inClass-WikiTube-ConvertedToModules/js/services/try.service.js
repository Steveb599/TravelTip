export const tryService = {
    count : 89,
    greet : sayHello,
    printRandom,
    printMax
}


function sayHello() {
    console.log('Hello!')
}


function printRandom() {
    console.log(Math.random())
}

function printMax(...args) {
    console.log(Math.max(...args))
}

export function boo(){
    console.log('Boo!')
}

// a debugging technique for accessing the service functions from console
// window.tryService = tryService
// var gCars = [{vendor: 'Audu'}, {vendor: 'Fiak'}]
// window.theCars = gCars