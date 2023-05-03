import { demoService } from './demo.service.js'
var gBaba = 'baba'

window.onInit = onInit
window.onGo = onGo

function onInit() {
    const strDate = Date()
    console.log(strDate, 'Ready...')
}

function onGo() {
    console.log('Going...')

    // TODO: Call a function from a service
    demoService.demoFunc()
    // demoService.foo()
}