import { defineCustomSelect } from '../../src/defineCustomSelect';
import { createCustomSelect } from '../../src/createCustomSelect';

export default {
    title: 'Custom Select / CSS',
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
    label: 'Blue'
};

export const Red = Template.bind({});
Red.args = {
    css_button_background: 'red',
    label: 'Red'
};