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
