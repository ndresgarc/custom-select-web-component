import { defineCustomSelect } from "../src/defineCustomSelect";

defineCustomSelect();

export const createCustomSelect = function (props) {

    return `

        <style>
            :root {
                --cs-button--background: ${props.css_button_background};
            }
        </style>

        <custom-select 
            ${props.html_disabled ? 'disabled' : ''}
            ${props.html_open ? 'open' : ''}>
            <option value="1">${props.label}</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </custom-select>
        
    `;
}