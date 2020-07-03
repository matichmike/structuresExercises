// add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end
function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

// remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//remove elements from arr, so that it only contains elements that sum to the value of 10
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr);

// remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places
function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
