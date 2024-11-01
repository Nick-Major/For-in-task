const character = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
let order = ['name', 'level'];

function orderByProps(obj, arr) {
  let arrKeys = Object.entries(obj);

  arrKeys.sort(function(a, b) {
      let aStr = a[0];
      let bStr = b[0];
      let hasAstr = arr.includes(aStr);
      let hasBstr = arr.includes(bStr);
      
      if(hasAstr && !hasBstr) {//если есть совпадение с массивом в A и нету в B, то ставим а слева
        return -1;
      } else if (hasBstr && !hasAstr) {//если есть совпадение с массивом в B и нету в A, то ставим b слева
        return 1;
      } else if (hasAstr && hasBstr) {//если есть совпадение с массивом в A и B, то надо получить индексы A и B, далее сравнить индексы и поставить слева тот что меньше
        let indexA = arr.indexOf(aStr);
        let indexB = arr.indexOf(bStr);
        if (indexA < indexB) {
          return -1;
        } else if (indexA > indexB) {
          return 1;
        } else {
          return 0;
        }
      } else {//если нет совпадений нужно сортировать A и B по умолчанию: если A меньше B то возращаем -1, если A больше B то возращаем 1, если A и B равны то возращаем 0
        if(aStr < bStr) {
          return -1;
        } else if (aStr > bStr) {
          return 1;
        } else {
          return 0;
        }
      };
  });

  return arrKeys;
};

console.log(orderByProps(character, order));

