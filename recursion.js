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

// pow recursion example
function pow(x,n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

// recursive calculation
let company = { 
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current ) => prev + current.salary, 0)
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

//sumTo function
function sumTo(n) {
  if (n == 1) {
    return 1
  } else {
    return n + sumTo(n - 1);
  }
}

function sumTo(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

function sumTo(n) {
  return n * (n + 1) / 2;
}
console.log(sumTo(100))

// recursive factorial
function factorial(n) {
  if (n == 1) {
    return 1
  } else {
      return n * factorial(n - 1);
  }
}
console.log(factorial(5))

//fibonacci sequence
// recursion
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
// faster
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// print elements one by one
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//loop
function printList(list) {
  let tmp = list;
  while(tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}
//recursion
function printList(list) {
  alert(list.value);
  if (list.next) {
    printList(list.next);
  }
}

//same but in reverse
//loop
function printReverseList(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i])
  }
}
//recursion
function printReverseList(list) {
  if(list.next) {
    printReverseList(list.next);
  }
  alert(list.value);
}