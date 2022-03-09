/* export const createButton = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    onClick,
  }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = label;
    btn.addEventListener('click', onClick);
  
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');
  
    btn.style.backgroundColor = backgroundColor;
  
    return btn;
  }; */


export const createCustomSelect = function () {

    const template = document.createElement('template');

    template.innerHTML = `

        <div id="custom-select-wrapper">
            <div>
                <button id="custom-select-button">Select</button>
            </div>
            <div id="custom-select-box">
                <slot id="custom-select-slot"></slot>
            </div>
        </div>

        <style>
            #custom-select-wrapper {
                position: relative;
            }
            #custom-select-box {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: auto;
                height: auto;
            }
            :host([open]) {
                display: block;
            }
        </style>
    `;

    class CustomSelect extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(template.content.cloneNode(true));
        }

        connectedCallback() {

            let customSelect = this;
            this.shadowRoot.querySelector('#custom-select-button').addEventListener('click', function(event) {
                customSelect.open = !customSelect.open;
                if (customSelect.open) {
                    customSelect.shadowRoot.querySelector('#custom-select-box').style.display = 'block';
                } else {
                    customSelect.shadowRoot.querySelector('#custom-select-box').style.display = 'none';
                }
            });

            this.shadowRoot.querySelector('#custom-select-slot').addEventListener('click', function(event) {

                customSelect.value = event.target.getAttribute('custom-select-value');
                customSelect.open = false;
                customSelect.shadowRoot.querySelector('#custom-select-box').style.display = 'none';
                customSelect.shadowRoot.querySelector('#custom-select-button').innerHTML = event.target.innerHTML;
            
                const onChangeEvent = new CustomEvent('change', {
                    bubbles: true,
                    cancelable: true,
                    composed: true,
                    detail: {
                        value: event.target.getAttribute('value')
                    }
                });

                customSelect.dispatchEvent(onChangeEvent);

            });
            
        }

        disconnectedCallback() {
            
        }

        attributeChangedCallback(attrName, oldVal, newVal) {

        }

        static get observedAttributes() {
            return ['open'];
        }

        get open() {
            return this.hasAttribute('open');
        }

        set open(val) {
            if (val) {
                this.setAttribute('open', '');
            } else {
                this.removeAttribute('open');
            }
        }

        get value() {
            return this.getAttribute('value');
        }

        set value(val) {
            if (val) {
                this.setAttribute('value', val);
            } else {
                this.removeAttribute('value');
            }
        }

    }

    window.customElements.define('custom-select', CustomSelect);

};