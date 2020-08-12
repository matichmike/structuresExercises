// simple sorting arr with numbers (ascending)
let example = [3, 2, 6, 4];
example.sort((a,b) => a > b);

// bubble sort (swapping 2 elements each step)
//ES5 swap
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
//ES2015 swap
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//bubble sort implementation O(n)
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
        // ES2015 - swap(arr[j], j, j+1) instead of 22,23,24
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// selection sort
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
    // ES2015 - swap (arr, i, lowest) instead of 46,47,48
    }
  }
  return arr;
}

// insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let  currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}