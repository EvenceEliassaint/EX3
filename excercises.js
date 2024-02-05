// exercises.js
export function flattening(list) {
    return list.reduce((flatArray, subArray) => flatArray.concat(subArray), []);
  }
  // exercises.js
export function everyLoop(array, test) {
    for (let element of array) {
      if (!test(element)) return false;
    }
    return true;
  }
  
  export function everySome(array, test) {
    return array.every(test);
  }
  // test.js
import { flattening, loop, everyLoop, everySome } from './exercises.js';

console.log(flattening([[1, 2, 3], [4, 5], [6]]));
loop(3, n => n > 0, n => n - 1, console.log);
console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
