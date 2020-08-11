// basic recursion example that counts from n to 0
function countDown(num) {
  if(num <= 0) {
    console.log('Done');
    return;
  }
  console.log(num);
  num--;
  countDown(num)
}
countDown(5);

function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
}
// steps: return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1

//factorial iterative
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

//factorial recursive
function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num-1);
}