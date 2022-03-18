# wc-custom-select

A custom select component using Web Components. Mostly because I want to style the options inside it but also to learn to use them.

## Usage 

```
<custom-select>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
<custom-select>
```

## Test

```
npm run storybook
```

Storybook should then be available at http://localhost:6006

## Config

CSS custom properties can be configured in the host to stylize the component.

### Button (cs-button)

    background: var(--cs-button--background, transparent);
    border: var(--cs-button--background, 1px solid #ccc);
    border-radius: var(--cs-button--border-radius, none);
    color: var(--cs-button--color, black);
    padding: var(--cs-button--padding, black);

### Options (cs-options)

    border: var(--cs-options--border, 1px solid #ccc);


## TO-DO

+ `disabled` attribute should deactivate click
+ Fire event when a news value is selected