
export const moduleService = {
    foo: goo,
    val  : 109
}


function goo(title) {
    console.log('Foo!', title)
}


// Private function
function _createSomething() {
    console.log('Creating')
}