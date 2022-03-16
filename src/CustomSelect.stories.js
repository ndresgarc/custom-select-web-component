import { defineCustomSelect } from './CustomSelect';

defineCustomSelect();

function createCustomSelect(props) {
    return `

        <style>
            :root {
                --cs-button--background: ${props.css_button_background};
            }
        </style>

        <custom-select ${props.html_open ? 'open' : ''}>
            <option value="1">${props.label}</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </custom-select>
        
    `;
}

export default {
    title: 'CUSTOM SELECT / CSS',
    argTypes: {
        css_button_background: { control: 'text' },
        html_open: { control: 'boolean' }
    }
};

const Template = ({ label, ...args }) => {
    return createCustomSelect({ label, ...args });
};

export const Blue = Template.bind({});
Blue.args = {
    css_button_background: 'blue',
    label: 'Button blue',
    html_open: false
};

export const Red = Template.bind({});
Red.args = {
    css_button_background: 'red',
    label: 'Button red',
    html_open: false
};

export const Open = Template.bind({});
Open.args = {
    css_button_background: 'white',
    label: 'Open',
    html_open: true
};