import { character, order, customSorting } from "../src/index.js";

test ('sorting test', () => {
    expect(customSorting(character, order)).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
    ]);
})