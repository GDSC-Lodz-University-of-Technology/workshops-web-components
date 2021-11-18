const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" type="text/css" media="screen" href="./shared-styles.css" />
<style>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  label {
    font-size: 1.2rem;
    padding: 0.25rem;
  }
  input {
    margin: 0 1rem;
    padding: 0.25rem 0.5rem;
  }
  button {
    background-color: var(--accent-color);
    padding: 0.25rem 0.5rem;
    cursor: pointer;
  }
</style>
<div class="wrapper">
  <label for="new-event"></label>
  <input type="text" name="new-event" placeholder="Type to write ...">
  <button>Add</button>
</div>
`;

export class NewEventInput extends HTMLElement {
  
  static TAG = 'kk-new-event-input';
  static observedAttributes = ['kk-placeholder', 'kk-value', 'kk-type', 'kk-label'];

  _label;
  _input;
  _button;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    this.getElementReferences();
    this.initializeListeners();
    console.log(`${NewEventInput.name} has been created`);
  }

  get label() {
    return this._label.textContent;
  }

  set label(value) {
    this._label.textContent = value;
  }

  get placeholder() {
    return this._input.placeholder;
  }

  set placeholder(value) {
    this._input.placeholder = value;
  }

  get value() {
    return this._input.value;
  }

  set value(value) {
    this._input.value = value;
  }

  get type() {
    return this._input.type;
  }

  set type(value) {
    this._input.type = value;
  }

  getElementReferences() {
    this._label = this.shadowRoot.querySelector('label');
    this._input = this.shadowRoot.querySelector('input');
    this._button = this.shadowRoot.querySelector('button');
  }

  initializeListeners() {
    this._button.addEventListener('click', () => {
      if (this.value.length === 0) {
        return void 0;
      }
      this._button.dispatchEvent(new CustomEvent('add-event', 
      {
        detail: {
          eventValue: this.value
        },
        bubbles: true, 
        composed: true
      }));
      this.value = '';
    });
  }

  connectedCallback() {
    console.log(`${NewEventInput.name} has been mounted in DOM`);
  }

  disconnectedCallback() {
    console.log(`${NewEventInput.name} has been un-mounted from DOM`);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(oldValue === newValue) {
      return void 0;
    }
    switch (name) {
      case 'kk-placeholder':
        this.placeholder = newValue;
        break;
      case 'kk-value':
        this.value = newValue;
          break;
      case 'kk-type':
        this.type = newValue;
            break;      
      case 'kk-label':
        this.label = newValue;
            break;      
      default:
        throw new Error(`Attribute ${name} doesn't exists in ${NewEventInput.name} attributes`);
    }
  }

}

customElements.define(NewEventInput.TAG, NewEventInput);