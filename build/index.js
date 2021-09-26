// my-first-snowpack/index.js
import {helloWorldConsole} from './modules/hello-world.js'
helloWorldConsole()

import {helloFromTypescript} from './modules/hello-from-typescript.js'
helloFromTypescript()

import confetti from './_snowpack/pkg/canvas-confetti.js'
confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 10 })

import './components/hello-world-element.js';
// import './myscript.js'

