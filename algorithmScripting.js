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
