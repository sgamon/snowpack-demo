let fs = require('fs')
let path = require('path')
let camelCase = require('lodash.camelcase')

let config = require('../snowpack.config.js')

let [name] = process.argv.slice(2)
// preserve case of fist letter, in case we are naming a class
let firstLetter = name.charAt(0)
let fileName = firstLetter + camelCase(name).slice(1)

config.alias[name] = `./app/modules/${fileName}`

let moduleSource = `
export function ${name}() {
  
}
`.trim()
let modulePath = path.resolve(__dirname, '..', 'app', 'modules', `${fileName}.ts`)
fs.writeFileSync(modulePath, moduleSource)

let configPath = path.resolve(__dirname, '..', 'snowpack.config.js')
let configSource = `
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = ${JSON.stringify(config, null, 2)}
`.trim()
fs.writeFileSync(configPath, configSource)

console.log(`created ${name} in ./app/modules/${fileName}.ts`)
