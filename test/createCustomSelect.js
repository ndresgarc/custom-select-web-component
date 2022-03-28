import { defineCustomSelect } from "../src/defineCustomSelect";

defineCustomSelect();

export const createCustomSelect = function (props) {

    return `

        <style>

            :root {
                --cs-button--background: ${props.css_button_background};
                --cs-button--border: ${props.css_button_border};
                --cs-button--border-radius: ${props.css_button_border_radius};
                --cs-button--color: ${props.css_button_color};
                --cs-button--padding: ${props.css_button_padding};
                --cs-button--after--content: ${props.css_button_after_content};
                --cs-button--after--font-family: ${props.css_button_after_font_family};
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