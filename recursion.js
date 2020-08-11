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

// helper method recursion

function collectOdds(arr) {
  let result = [];
  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }
    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helperInput(helperInput.slice(1))
    // the first element is taken out of the array each time
  }
  helper(arr);
  return result;
}

// pure recursion method
function collectOdds(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}