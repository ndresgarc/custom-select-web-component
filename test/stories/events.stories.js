import { createCustomSelect } from '../createCustomSelect';

export default {
    title: 'Custom Select / Events',
    argTypes: {
        
    },
    parameters: {
        actions: {
            handles: [
                'click'
            ]
        }
    }
};

const Template = ({ label, ...args }) => {
    return createCustomSelect({ label, ...args });
};

export const Change = Template.bind({});
Change.args = {
    label: 'Blue'
};