const template = document.createElement('template');
template.innerHTML = `
<div class="wrapper blue-background">
  <label for="base-input"></label>
  <input type="text" name="base-input" placeholder="Type to write ...">
</div>
`;

export class BaseInput extends HTMLElement {
  
  static TAG = 'kk-base-input';
  static observedAttributes = ['kk-placeholder', 'kk-value', 'kk-type', 'kk-label'];

  _label;
  _input;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    this.getElementReferences();
    console.log(`${BaseInput.name} has been created`);
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
  }

  connectedCallback() {
    console.log(`${BaseInput.name} has been mounted in DOM`);
  }

  disconnectedCallback() {
    console.log(`${BaseInput.name} has been un-mounted from DOM`);
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
        throw new Error(`Attribute ${name} doesn't exists in ${BaseInput.name} attributes`);
    }
  }

}

customElements.define(BaseInput.TAG, BaseInput);