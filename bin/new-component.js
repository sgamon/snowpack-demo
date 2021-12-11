let fs = require('fs')
let path = require('path')
let kebabCase = require('lodash.kebabcase')
let camelCase = require('lodash.camelcase')

let config = require('../snowpack.config.js')

let [name] = process.argv.slice(2)
name = camelCase(name)
let fileName = kebabCase(name)

config.alias[fileName] = `./app/components/${fileName}`

let componentSource = `
import {LitElement, html} from 'lit';

class ${name} extends LitElement {
  render() {
    return html\`hello world\`
  }
}

customElements.define('${fileName}', ${name})

export default ${name}
`.trim()
let componentPath = path.resolve(__dirname, '..', 'app', 'components', `${fileName}.ts`)
fs.writeFileSync(componentPath, componentSource)

let configPath = path.resolve(__dirname, '..', 'snowpack.config.js')
let configSource = `
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = ${JSON.stringify(config, null, 2)}
`.trim()
fs.writeFileSync(configPath, configSource)

console.log(`created ${fileName} in ./app/components/${fileName}.ts`)
