import { BaseInput } from "./BaseInput.js";

const template = document.createElement('template');
template.innerHTML = `
<${BaseInput.TAG} kk-placeholder="i love you" kk-value="test" kk-type="text" kk-label="Do you love me?" ></${BaseInput.TAG}>
`;
export class App extends HTMLElement {

  static TAG = 'kk-app';

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
  }

}

customElements.define(App.TAG, App);