import { createCustomSelect } from '../createCustomSelect';

export default {
    title: 'Custom Select / Attributes',
    argTypes: {
        css_button_background: { control: 'text' },
        html_open: { control: 'boolean' }
    }
};

const Template = ({ label, ...args }) => {
    return createCustomSelect({ label, ...args });
};

export const Open = Template.bind({});
Open.args = {
    css_button_background: 'white',
    label: 'Open',
    html_open: true
};