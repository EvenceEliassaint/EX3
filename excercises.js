// exercises.js
let arrays = [[1, 2, 3], [4, 5], [6]];
export function flattening(list) {
    return list.reduce((previousValue, currentValue) => previousValue.concat(currentValue));
  }

  console.log(flattening(arrays))

  // exercises.js
export function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
      body(i);
    }
  }
  loop(3, n => n > 0, n => n - 1, console.log);
  
  // exercises.js
export function everyLoop(array, test) {
    let curResult = true
    for(let item of array){
        curResult = curResult && test(item)
    }
    return curResult
    }
  
  export function everySome(array, test) {
    return !array.some((value)=>!test(value))
  }
  console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true