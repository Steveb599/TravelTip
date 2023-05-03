setInterval(() => {
	console.log('Doing something important')
}, 400)

function onInit() {
	console.log('Document Ready')
	foo1()
}

function foo1() {
	console.log('foo1')
	goo1()
}

function goo1() {
	console.log('goo1')
	// debugger
}

function doIt(elBtn) {
	console.log('Doing it..')
	elBtn.innerText = 'Cancel Please...'

    alert(3)
	// fetchAsyncData().then(() => elBtn.innerText = 'Do it!')
	// mySlowFunction(12)
}

function onTryMe() {
	console.log('Try Me!')
}

function mySlowFunction(baseNumber) {
	let result = 0
    
	console.time('mySlowFunction')
    
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
		result += Math.atan(i) * Math.tan(i)
	}
	console.timeEnd('mySlowFunction')
}

function fetchAsyncData() {
    
	// Note: This URL has a DELAY param
	const url = 'http://www.filltext.com/?rows=10&fullname={firstName}~{lastName}&score={number}&pretty=true&delay=5'
	
    return fetch(url)
		.then(res => res.json())
		.then(gamers => console.log('Got gamers:', gamers))
}