import { defineCustomSelect } from './CustomSelect';

defineCustomSelect();

export default {
    title: 'CCT/two'
};

export const customSelect = () => `
    <custom-select>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
    </custom-select>`;