import { defineCustomSelect } from './CustomSelect';

defineCustomSelect();

function createCustomSelect(props) {
    return `

        <style>
            :root {
                --cs-button--background: ${props.css_button_background};
            }
        </style>

        <custom-select>
            <option value="1">${props.label}</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </custom-select>
        
    `;
}

export default {
    title: 'CUSTOM SELECT',
    argTypes: {
        css_button_background: { control: 'text' }
    }
};

const Template = ({ label, ...args }) => {
    return createCustomSelect({ label, ...args });
};

export const Blue = Template.bind({});
Blue.args = {
    css_button_background: 'blue',
    label: 'Button blue',
};

export const Red = Template.bind({});
Red.args = {
    css_button_background: 'red',
    label: 'Button red',
};