import { defineCustomSelect } from './CustomSelect';

defineCustomSelect();

export default {
    title: 'CCT/two'
};

export const customSelect = () => `
    <custom-select>
        <div value="1">One</div>
        <div value="2">Two</div>
        <div value="3">Three</div>
        <div value="4">Four</div>
    </custom-select>`;