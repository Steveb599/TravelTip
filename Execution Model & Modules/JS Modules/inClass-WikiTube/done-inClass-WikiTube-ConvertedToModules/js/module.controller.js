//  <script type="module">

// *. no global vars, no global functions
//    var gBaba = 100
//    onInit, onClick

// *. automotaic - 'use strict'
//    x = 100

// *. can import/export

// Named import
import { moduleService } from './services/module.service.js'
import { tryService, boo } from './services/try.service.js'


boo()

console.log('moduleService', moduleService)
console.log('tryService', tryService)

console.log('Hello Modules')

// Make those functions
window.gMama = 101
window.onInit = onInit1
window.onGo = onGo


function onInit1() {
    console.log('Ready!')
    moduleService.foo('Bona!')
    tryService.printMax(51, 1, 7)
}


function onGo() {
    console.log('Goiing!')
}