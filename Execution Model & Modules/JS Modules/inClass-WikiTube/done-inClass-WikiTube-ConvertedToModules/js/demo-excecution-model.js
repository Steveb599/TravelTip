setInterval(()=>{
    console.log('Doing something important')
}, 2500)


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
	mySlowFunction(11)
	
}

function mySlowFunction(baseNumber) {
	console.time('mySlowFunction')
	let result = 0	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i)
	}
	console.timeEnd('mySlowFunction')
}

function onTryMe() {
	console.log('Try Me!')
}

