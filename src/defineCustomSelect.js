export const defineCustomSelect = function () {

    const template = document.createElement('template');

    // IDs are used for JS
    // Classes are used for CSS

    template.innerHTML = `

        <style>

            :host([disabled]) {
                opacity: 0.5;
            }

            :host([open]) .cs-options {
                display: block;
            }

            :host(:not([open])) .cs-options,
            :host([disabled]) .cs-options {
                display: none;
            }

            .cs-wrapper {
                display: inline-block;
                position: relative;
            }

            .cs-button {
                background: var(--cs-button--background, transparent);
                border: var(--cs-button--border, 1px solid #ccc);
                border-radius: var(--cs-button--border-radius, none);
                color: var(--cs-button--color, black);
                padding: var(--cs-button--padding, black);
            }

            .cs-button::after {
                display: inline-block;
                content: var(--cs-button--after--content, "▼");;
                font-family: var(--cs-button--after--font-family);
            }

            .cs-options {
                border: var(--cs-options--border, 1px solid #ccc);
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
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

            let customSelect = this;
            this.shadowRoot.querySelector('#cs-button').addEventListener('click', (event) => {

                if (this.disabled) return false;

                customSelect.open = !customSelect.open;

            });

            this.shadowRoot.querySelector('#cs-slot').addEventListener('click', function(event) {

                event.preventDefault();
                event.stopPropagation();


                customSelect.value = event.target.getAttribute('custom-select-value');
                customSelect.open = false;
                customSelect.shadowRoot.querySelector('#cs-button').innerHTML = event.target.innerHTML;
            
                customSelect.dispatchEvent(new Event('change'));

            });
            
        }

        disconnectedCallback() {
            // Remove listeners

        }

        // attributeChangedCallback
        // Called whenever one of the element's observedAttributes are updated

        _isBooleanAttribute(attributeName) {
            if (
                attributeName === 'open' ||
                attributeName === 'disabled'
            ) return true;
            return false;
        }

        attributeChangedCallback(attributeName, oldValue, newValue) {            
            if (newValue !== oldValue) {
                this[attributeName] = this._isBooleanAttribute(attributeName) ? this.hasAttribute(attributeName) : this.getAttribute(attributeName);                
            }
        }

        static get observedAttributes() {
            return [
                'disabled',
                'multiple',
                'open',
                'size'
            ];
        }

        // ATTRIBUTE : DISABLED
        get disabled() {
            return this.hasAttribute('disabled');
        }

        set disabled(isDisabled) {
            isDisabled ? this.setAttribute('disabled', true) : this.removeAttribute('disabled');
        }

        // ATTRIBUTE : OPEN
        get open() {
            return this.hasAttribute('open');
        }
          
        set open(isOpen) {
            if (isOpen) {
                this.setAttribute('open', true);
            } else {
                this.removeAttribute('open');
            }
        }

        // ATTRIBUTE : MULTIPLE

        // ATTRIBUTE : SIZE

        // PROPERTY : VALUE
        // ---------------------------------------------------------------------

        get value() {
            return this.getAttribute('value');
        }

        set value(val) {
            // TODO: Search if value exist in the select
            // If yes, set it up
            // If no, throw error
            if (val) {
                this.setAttribute('value', val);
            } else {
                this.removeAttribute('value');
            }
        }

        // Internal methods

        _buttonClickHandler(event) {
           
            /*

            COMMENTED OUT AS THIS IMPLEMENTATION WAS CAUSING PROBLEMS WITH THE NESTED HTML OPTION

            const { shadowRoot } = this;

            this.open = !this.open;
            if (this.open) {
                this.shadowRoot.querySelector('#cs-options').style.display = 'block';
            } else {
                this.shadowRoot.querySelector('#cs-options').style.display = 'none';
            }
             
            */
        }

    }

    window.customElements.define('custom-select', CustomSelect);

};