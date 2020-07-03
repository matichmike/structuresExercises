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

// extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'
function forecast(arr) {
  arr = arr.slice(2, 4);
  return arr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// The function is supposed to return a new array made up of num copies of arr
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun']
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
console.log(spreadOut());

// Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not
function quickCheck(arr, elem) {
if (arr.indexOf(elem) === -1) {
  return false;
  } else {
    return true;
  }
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed
function filteredArray(arr, elem) {
  let newArr = [];
  for (let ar of arr) {
   if (!ar.includes(elem)) {
     newArr.push(ar);
   }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));