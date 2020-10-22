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

// Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], [
    ['deep',
      ['deeper',
        ['deepest']
        ]
      ]
    ],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];

//arr suminput
function sumInput() {
  let numbers = [];
  while(true) {
    let value = prompt("Enter value", 0);

    if (value === '' || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// max continious sum of arr elems O(n^2)
function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  return maxSum;
}

//max continious sum of arr elems O(n)
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

// camelize fn
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

// range filter
function filterRange(arr, a, b) {
  return arr.filter(item => (a >= item && item <= b))
}

//removing the elements filter
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// sorted arr copy
function copySorted(arr) {
  return arr.slice().sort();
}

// extended calc
function Calculator() {
  this.methods = {
    "-": (a,b) => a - b,
    "+": (a,b) => a + b
  };
  this.calculate = function(str) {
    let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2]
    if(!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
    return this.methods[op](a, b);
  }
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }
}
let newCalc = new Calculator;
newCalc.addMethod("**", (a,b) => a ** b);
console.log(newCalc.calculate("2 ** 2"));

// converting objects to arr
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map(item => item.name);

// converting objects to mapped arr
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));