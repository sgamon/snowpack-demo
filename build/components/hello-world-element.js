import {LitElement, html} from '../_snowpack/pkg/lit-element.js';

class HelloWorldElement extends LitElement {
  render() {
    return html`hello world`
  }
}

customElements.define('hello-world-element', HelloWorldElement)

export default HelloWorldElement
