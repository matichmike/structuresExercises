const { performance } = require('perf_hooks');
// sum all numbers from 1 to n
// first method
function sum1(n) {
  let result = 0;
  // 1 assignment
  for (let i = 1; i <= n; i++) {
    // 1 assignment + n comparisons + n additions, n assignments in the loop + 
    result += i;
    // n additions, n assignments
    // general trend - operations count grows proportionally to n
  }
  return result;
}

let t1 = performance.now();
sum1(1000000000);
let t2 = performance.now();
console.log(`Time passed: ${(t2 - t1) / 1000} seconds`);
// Time passed: 0.8892217770218849 seconds
// O(n) = linear/proportional


// second method
function sum2(n) {
  return n * (n + 1) / 2;
  // 3 simple operations - addition, multiplication, division
}
let t3 = performance.now();
sum2(1000000000);
let t4 = performance.now();
console.log(`Time passed: ${(t4 - t3) / 1000} seconds`);
// Time passed: 0.00008387899398803711 seconds
// O(1) = constant

function printPairs(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j);
    }
  }
}
// O(n^2) = quadratic

//O(2n), O(n+10), O(1000n + 50) = O(n)
//O(500) = O(1)
//O(13n^2), O(n^2 + 5n + 1000) = O(n^2)

function atLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}
// O(n) - depends on n

function atMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i)
  }
}
// O(1) - depends on 5

// Space complexity
// booleans, numbers, undefined, null = constant space O(1);
function sum(array) {
  let result = 0;
  for (let i = 1; i <= array.length; i++) {
    result += array[i];
  }
  return result;
}
//O(1) space -> 2 variables

function double(array) {
  let result = [];
  for (let i = 1; i <= array.length; i++) {
    result.push(2 * array[i]);
  }
  return result;
}
//O(n) space - array gets lopnger proportionally