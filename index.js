import { NewEventInput } from "./NewEventInput.js";

const template = document.createElement('template');
template.innerHTML = `
<${NewEventInput.TAG} kk-placeholder="i love you" kk-value="test" kk-type="text" kk-label="Do you love me?" ></${NewEventInput.TAG}>
`;
export class App extends HTMLElement {

  static TAG = 'kk-app';

  _newEventInput;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    this.getElementReferences();
    this.initializeListeners();
  }

  getElementReferences() {
    this._newEventInput = this.shadowRoot.querySelector(NewEventInput.TAG);
  }

  initializeListeners() {
    this._newEventInput.addEventListener('add-event', e => console.log(e));
  }

}

customElements.define(App.TAG, App);