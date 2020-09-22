import { html, customElement, LitElement, property } from 'lit-element';
import styles from './chips-css';

@customElement('orxe-chips')
export default class OrxeChips extends LitElement {

  /**
  * @noInheritDoc
  */
  @property({attribute: 'chip-content' })
  chipContent = [
    {
      label: 'Label 1',
      count: 0
    },
    {
      label: 'Label 2',
      count: 10
    },
    {
      label: 'Label 3',
      count: 9
    },
    {
      label: 'Label 4',
      count: 6
    }
  ];

  @property({ type: Boolean, reflect: true, attribute: 'close-chip' })
  closeChip = false;

  constructor() {
    super();
  }

  /**
   * Implement `render` to define a template for chip element.
   */
  render() {
      return html`
      <div class="chips-container">
        ${this.chipContent.map((item) => 
          html`
          <div class="chips" @click="${this.setActive}">
            <div class="chip-content">
              <span title=${item.label.length > 50 ? item.label : ''}>${item.label}</span>
            </div>
            <div class="count-label-container">
              <span class="count-label">${item.count}</span>
            </div>
          </div>
          `)}
      </div>`;
  }

  setActive(event) {
    const element = event.currentTarget.parentNode.querySelector('.active');
    if (element !== null) {
      element.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
