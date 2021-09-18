let fs = require('fs')
let path = require('path')
let kebabCase = require('lodash.kebabcase')
let camelCase = require('lodash.camelcase')

let config = require('../snowpack.config.js')

let [name] = process.argv.slice(2)
name = camelCase(name)
let fileName = kebabCase(name)

config.alias[name] = `./app/modules/${kebabCase(name)}`

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
