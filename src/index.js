export const character = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
export let order = ['name', 'level'];

export function customSorting(obj, arr) {
    let objProps = [];
  
    Object.keys(obj).forEach((key) => {
      if (!arr.includes(key)) {
        objProps.push(key);
      }
    });

    objProps.sort(function(a, b) {
        if(a < b) {
            return -1;
        } else {
            return 1;
        }
    })

    objProps = [...arr, ...objProps];
    return objProps.map((key) => ({ key, value: obj[key] }));
};
  
console.log(customSorting(character, order));
