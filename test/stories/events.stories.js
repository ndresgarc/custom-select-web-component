import { createCustomSelect } from '../createCustomSelect';

import { action } from '@storybook/addon-actions'; 

export default {
    title: 'Custom Select / Events',
    argTypes: {
        
    },
    parameters: {
        actions: {
            handles: [
                'click custom-select',
                'change'
            ]
        }
    }
};

const Template = ({ label, ...args }) => {
    return createCustomSelect({ label, ...args });
};

export const Change = Template.bind({});
Change.args = {
    label: 'Blue',
    html_onclick: action('bla')
};