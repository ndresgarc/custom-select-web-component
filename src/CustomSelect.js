export const defineCustomSelect = function () {

    const template = document.createElement('template');

    // IDs are used for JS
    // Classes are used for CSS

    template.innerHTML = `

        <div id="cs-wrapper" class="cs-wrapper">
            <div>
                <button id="cs-button" class="cs-button">Select...</button>
            </div>
            <div id="cs-options" class="cs-options">
                <slot id="cs-slot"></slot>
            </div>
        </div>

        <style>
            .cs-wrapper {
                position: relative;
            }
            .cs-options {
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
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.content.cloneNode(true));
            // const node = document.importNode(template.content, true);
            // this.appendChild(node);
        }

        // Element is added to the DOM
        connectedCallback() {

            let customSelect = this;
            this.shadowRoot.querySelector('#cs-button').addEventListener('click', this._buttonClickHandler);

            this.shadowRoot.querySelector('#cs-slot').addEventListener('click', function(event) {

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