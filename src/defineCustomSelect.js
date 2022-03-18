export const defineCustomSelect = function () {

    const template = document.createElement('template');

    // IDs are used for JS
    // Classes are used for CSS

    template.innerHTML = `

        <style>

            :host([open]) .cs-options {
                display: block;
            }
            :host(:not([open])) .cs-options {
                display: none;
            }

            .cs-wrapper {
                position: relative;
            }

            .cs-button {
                background: var(--cs-button--background, transparent);
                border: var(--cs-button--background, 1px solid #ccc);
                border-radius: var(--cs-button--border-radius, none);
                color: var(--cs-button--color, black);
                padding: var(--cs-button--padding, black);
            }

            .cs-button::after {
                display: inline-block;
                content: "▼";                
            }

            .cs-options {
                border: var(--cs-options--border, 1px solid #ccc);
                position: absolute;
                top: 100%;
                left: 0;
                width: auto;
                height: auto;
            }

        
        </style>

        <div id="cs-wrapper" class="cs-wrapper">

            <button id="cs-button" class="cs-button">
                Select...
            </button>

            <div id="cs-options" class="cs-options">
                <slot id="cs-slot"></slot>
            </div>

        </div>

    `;

    class CustomSelect extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this._buttonClickHandler = this._buttonClickHandler.bind(this);
            
        }

        // Element is added to the DOM
        connectedCallback() {

            const { shadowRoot } = this;

            shadowRoot.appendChild(template.content.cloneNode(true));
            // const node = document.importNode(template.content, true);
            // this.appendChild(node);

            let customSelect = this;
            this.shadowRoot.querySelector('#cs-button').addEventListener('click', (event) => {

                customSelect.open = !customSelect.open;
                if (customSelect.open) {
                    // customSelect.shadowRoot.querySelector('#cs-options').style.display = 'block';
                } else {
                    // customSelect.shadowRoot.querySelector('#cs-options').style.display = 'none';
                }

            });

            this.shadowRoot.querySelector('#cs-slot').addEventListener('click', function(event) {

                event.preventDefault();
                event.stopPropagation();

                customSelect.value = event.target.getAttribute('custom-select-value');
                customSelect.open = false;
                customSelect.shadowRoot.querySelector('#cs-options').style.display = 'none';
                customSelect.shadowRoot.querySelector('#cs-button').innerHTML = event.target.innerHTML;
            
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

        // Called whenever one of the element's observedAttributes are updated
        attributeChangedCallback(attributeName, oldValue, newValue) {

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

        // Internal methods

        _buttonClickHandler(event) {
           
            const { shadowRoot } = this;

            this.open = !this.open;
            if (this.open) {
                this.shadowRoot.querySelector('#cs-options').style.display = 'block';
            } else {
                this.shadowRoot.querySelector('#cs-options').style.display = 'none';
            }
        }

    }

    window.customElements.define('custom-select', CustomSelect);

};