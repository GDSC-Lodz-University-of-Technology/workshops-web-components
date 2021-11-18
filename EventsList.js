const template = document.createElement('template');
template.innerHTML = `
<h2>Events list:</h2>
<ul class="events-list"></ul>
`;

export class EventsList extends HTMLElement {

  static TAG = 'kk-events-list';

  eventsWrapper;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    this.getElementReferences();
  }

  getElementReferences() {
    this.eventsWrapper = this.shadowRoot.querySelector('ul');
  }

  addEvent(eventContent) {
    const eventWrapper = document.createElement('li');
    eventWrapper.textContent = eventContent;
    this.eventsWrapper.append(eventWrapper);
  }

}

customElements.define(EventsList.TAG, EventsList);