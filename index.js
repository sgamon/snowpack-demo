// my-first-snowpack/index.js
import {helloWorldConsole} from 'helloWorldConsole'
helloWorldConsole()

import {helloFromTypescript} from 'helloFromTypescript'
helloFromTypescript()

import confetti from 'canvas-confetti'
confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 10 })

import 'hello-world-element';
// import './myscript.js'

