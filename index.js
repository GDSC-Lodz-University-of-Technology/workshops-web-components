import { BaseInput } from "./BaseInput.js";

const template = document.createElement('template');
template.innerHTML = `
<${BaseInput.TAG}></${BaseInput.TAG}>
`;
export class App extends HTMLElement {

  static TAG = 'kk-app';

  constructor() {
    super();
    this.append(template.content.cloneNode(true));
  }

}

customElements.define(App.TAG, App);