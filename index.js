import {NewEventInput} from "./NewEventInput.js";
import {EventsList} from "./EventsList.js";

const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" type="text/css" media="screen" href="./shared-styles.css" />
<style>
:host {
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<main id="container">
  <${NewEventInput.TAG} kk-placeholder="Event value ..." kk-label="Add new event:" ></${NewEventInput.TAG}>
  <${EventsList.TAG}></${EventsList.TAG}>
</main>
`;

export class App extends HTMLElement {

  static TAG = 'kk-app';

  _newEventInput;
  _eventsList;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    this.getElementReferences();
    this.initializeListeners();
  }

  getElementReferences() {
    this._newEventInput = this.shadowRoot.querySelector(NewEventInput.TAG);
    this._eventsList = this.shadowRoot.querySelector(EventsList.TAG);
  }

  initializeListeners() {
    this._newEventInput.addEventListener('add-event', ({detail}) => this._eventsList.addEvent(detail.eventValue));
  }

}

customElements.define(App.TAG, App);