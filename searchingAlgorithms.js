// linear search example O(n)
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// binary search or divide and conquer O(log n)
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
    if(elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}