import {NewEventInput} from "./NewEventInput.js";
import {EventsList} from "./EventsList.js";

const template = document.createElement('template');
template.innerHTML = `
<${NewEventInput.TAG} kk-placeholder="What event you would like to add?" kk-label="Add new event" ></${NewEventInput.TAG}>
<${EventsList.TAG}></${EventsList.TAG}>
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