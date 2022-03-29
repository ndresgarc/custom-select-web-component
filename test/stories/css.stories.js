import { createCustomSelect } from '../createCustomSelect';

export default {
    title: 'Custom Select / CSS',
    argTypes: {
        css_button_background: {
            control: 'text',
            name: '--cs-button--background'
        },
        css_button_color: {
            control: 'text',
            name: '--cs-button--color'
        },
        css_button_border: {
            control: 'text',
            name: '--cs-button--border'
        },
        css_button_border_radius: {
            control: 'text',
            name: '--cs-button--border-radius'
        },
        css_button_padding: {
            control: 'text',
            name: '--cs-button--padding'
        },
        css_button_after_content: {
            control: 'text',
            name: '--cs-button--after--content'
        },
        css_button_after_font_family: {
            control: 'text',
            name: '--cs-button--after--font-family'
        }
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



