// Reverse the provided string
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

// Return the factorial of the provided integer using recursion
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num-1);
}
factorialize(5);

// Return the length of the longest word in the provided sentence
function findLongestWordLength(str) {
  let result = 0;
  let arr = str.split(" ");
  for (let ar of arr) {
    if (ar.length > result) {
      result = ar.length;
    }
  }
  return result;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return an array consisting of the largest number from each provided sub-array
function largestOfFour(arr) {
  let result = [];
  for (let ar of arr) {
    result.push(Math.max(...ar));
  }
  return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Check if a string (first argument, str) ends with the given target string (second argument, target)
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }
  let result = "";
  while (num > 0) {
    result += str;
    num --;
  }
  return result;
}
repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
function findElement(arr, func) {
  return arr.find(func);
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// Check if a value is classified as a boolean primitive.
function booWho(bool) {
  return (typeof (bool) === 'boolean');
}
booWho(null);

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  const temp = str.toLowerCase().split(" ");
  let result = temp.map(elem => elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase()))
  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Insert the first array into second array starting from index n.
function frankenSplice(arr1, arr2, n) {
  let temp = arr2.slice();
  temp.splice(n, 0, ...arr1);
  return temp;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Remove all falsy values from an array
function bouncer(arr) {
  let result = [];
  arr.map(elem => {
    if (elem) {
      result.push(elem);
    }
  })
  return result;
}
bouncer([7, "ate", "", false, 9]);

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}
getIndexToIns([2, 5, 10], 15);

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let firstArr = arr[0].toLowerCase().split("");
  let secondArr = arr[1].toLowerCase().split("");
  for (let i in secondArr) {
    if (!firstArr.includes(secondArr[i])) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let result = [];
  while (arr.length) {
    result.push(arr.splice(0, size))
  }
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// function that returns counts of each char in a given string
// charCount("hello") -> {h:1, e:1, l:2, o:1}
function charCount(str) {
  let result = {};
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
      if (/[a-z0-9]/.test(lowerStr[i])) {
      if (!result[lowerStr[i]]) {
          result[lowerStr[i]] = 1;
      } else {
         result[lowerStr[i]]++;
      }
      }
  }
  return result;
}

console.log(charCount("Hello hey"))

// check if second array contains the squared elements of the first one
// O(n^2) solution
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i]** 2)
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// O(n) solution
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// check if two given strings are anagrams
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log('anagram is', validAnagram('anagram', 'nagaram'))

// sumZero function - return the array with first pair of given array that sums to 0
// O(n^2) solution
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//O(n) solution
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right --;
    } else {
      left++;
    }
  }
}

// countUniqueValues accepts sorted arr and counts unique vals, can have negative numbers


//new Set solution
function countUniqueValues(array){
  const uniqueArr = Array.from(new Set(array));
   if(uniqueArr.length < 2) {
       return 0;
   }
   return uniqueArr.length;
  }

  // double pointers solution
  function countUniqueValues(arr){
    if(arr.length === 0) {
      return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }

// sliding window pattern - maxSubarraySum - calculate the max sum of n consecutive elements in array
// O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  const max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i+j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}  

// sliding window O(n) linear complexity solution
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// binary search - find the index of given element in the array - O(log n)
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    if(array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// one liner pangram check
const isPangramm = (string) => ((Array.from(new Set(string.toUpperCase().replace(/[^a-zA-Z]/g, "")))).length) === 26 ? "yup": "nope";

// the first distinct value in array
const result = (array) => array.find(x => array.indexOf(x) === array.lastIndexOf(x));

// odd numbers alert with continue
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  alert(i);
}

// breaking all cycles
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Coordinates (${i},${j})`, '');
    if(!input) break outer;
  }
}
alert('Done!')

// grouping cases
let argument = prompt('Enter a number');
switch (argument) {
  case '0':
  case '1':
    alert('One or zero');
    break;

  case '2':
    alert('Two');
    break;

  default:
    alert('Undefined');
}

// prime number check
function showPrime(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

// arrow fn reformat
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

// ask(
//   "Are you sure?",
//   function() { alert("You have confirmed the script execution"); },
//   function() { alert("You have cancelled the script execution"); }
// );

ask(
  "Are you sure",
  () => alert("You have confirmed the script execution"),
  () => alert("You have cancelled the script execution")
);

// assertion example
describe("pow", function(){
  it("power n", function() {
    assert.equal(pow(2,3), 8);
  });
});

// object calc
let calc = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = prompt("a?", 0);
    this.b = prompt("b?", 0);
  }
};

calc.read();
alert(calc.sum());
alert(calc.mul());

// ladder w/ chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert(this.step);
    return this;
  }
};
ladder.up().up().down().showStep();

// new obj calc
function Calculator() {

  this.read = function() {
    this.a = prompt("a?", 0);
    this.b = prompt("b", 0);
  }

  this.sum = function() {
    return this.a + this.b;
  }

  this.mul = function() {
    return this.a * this.b;
  }

}
let calculator = new Calculator;
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// new obj accumulator
function Accumulator(startingValue) {
 this.value = startingValue;

 this.read = function() {
  this.value += +prompt("enter a number", 0);
 };
};

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value)

// script that shows the sum of 2 inputs
let a = +prompt("first num?", "");
let b = +prompt("second num?", "");
alert(a + b);

//correctly rounding 6.35
alert(Math.round(6.35 * 10)/10);

// prompt the user for number until the number is received
function readNumber() {
  let num;
  do {
    num = prompt("Enter a num", 0);
  } while (!isFinite(num));

  if(num === null || num === '') return null;
  return +num;
};

// random number between the two parameters
function random(min, max) {
  return min + Math.random() * (max - min);
};
alert(random(1,5));

// random integer between the two params
function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert(randomInt(1,5));

// string search - all indexes
let str = "Hey Hey";
let target = "Hey";
let pos = 0;
while(true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  alert(`found here: ${foundPos}`);
  pos = foundPos + 1;
}

// spam filter on keywords
function checkSpam(str, keyword1, keyword2) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes(keyword1) || lowerStr.includes(keyword2);
}

// truncate
function truncate(str, maxLength) {
  return (str.length > maxLength) ? str.slice(0, maxLength - 1) + '...' : str;
}

// extract cur
function extractCurVal(str) {return +str.slice(1);};

// named function expression
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest");
  }
}


let welcome = sayHi;
sayHi = null;
welcome();

//makeCounter
function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;
  return counter;
}

//setInterval regular
function printNumbers(from, to) {
  let current = from;
  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId)
    }
    current++;
  }, 1000)
}
printNumbers(5, 10);

//setInterval recursive
function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if(current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}
printNumbers(5, 10);