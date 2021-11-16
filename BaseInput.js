const template = document.createElement('template');
template.innerHTML = `
<div class="wrapper blue-background">
  <label for="base-input"></label>
  <input type="text" name="base-input" placeholder="Type to write ...">
</div>
`;

export class BaseInput extends HTMLElement {
  
  static TAG = 'kk-base-input';

  constructor() {
    super();
    this.append(template.content.cloneNode(true));
  }

}

customElements.define(BaseInput.TAG, BaseInput);