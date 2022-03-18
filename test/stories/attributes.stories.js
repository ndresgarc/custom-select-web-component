import { createCustomSelect } from '../createCustomSelect';

export default {
    title: 'Custom Select / Attributes',
    argTypes: {
        html_disabled: {
            control: 'boolean',
            name: 'disabled',
        },
        html_open: {
            control: 'boolean',
            name: 'open',
        }
    }
};

const Template = ({ label, ...args }) => {
    return createCustomSelect({ label, ...args });
};

export const Open = Template.bind({});
Open.args = {
    html_open: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    html_disabled: true
};