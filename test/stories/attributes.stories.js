import { createCustomSelect } from '../createCustomSelect';

export default {
    title: 'Custom Select / Attributes',
    argTypes: {
        open: {
            control: 'boolean'
        }
    }
};

const Template = ({ label, ...args }) => {
    return createCustomSelect({ label, ...args });
};

export const Open = Template.bind({});
Open.args = {
    open: true
};