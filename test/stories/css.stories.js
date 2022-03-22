import { createCustomSelect } from '../createCustomSelect';

export default {
    title: 'Custom Select / CSS',
    argTypes: {
        css_button_background: {
            control: 'text',
            name: 'background'
        },
        css_button_color: {
            control: 'text',
            name: 'color'
        },
        css_button_border: {
            control: 'text',
            name: 'border'
        },
        css_button_padding: {
            control: 'text',
            name: 'padding'
        },
    }
};

const Template = ({ label, ...args }) => {
    return createCustomSelect({ label, ...args });
};

export const css = Template.bind({});
css.args = {
    css_button_background: 'white',
    css_button_border: '1px solid #eee',
    css_button_color: 'black',
    css_button_padding: '5px'
};



