const { performance } = require('perf_hooks');
// sum all numbers from 1 to n
// first method
function sum1(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

let t1 = performance.now();
sum1(1000000000);
let t2 = performance.now();
console.log(`Time passed: ${(t2 - t1) / 1000} seconds`);
// Time passed: 0.8892217770218849 seconds

// second method
function sum2(n) {
  return n * (n + 1) / 2;
}
let t3 = performance.now();
sum2(1000000000);
let t4 = performance.now();
console.log(`Time passed: ${(t4 - t3) / 1000} seconds`);
// Time passed: 0.00008387899398803711 seconds