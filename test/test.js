import { character, order, customSorting } from "../src/index.js";

test ('Valid arguments test', () => {
    let arr = Array.isArray(order);
    let isObj;
    if(typeof character === 'object') {
        isObj = true;
        return isObj;
    }
    let result = [...arr, ...isObj];

    expect(result).toEqual([true, true]);
})