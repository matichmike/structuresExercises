// arr of unique vals
function unique(arr) {
  return Array.from(new Set(arr));
}

// anagram filter
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  return Array.from(map.values);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

// iterable keys
let map = new Map();
map.set('name', 'John');
let keys = Array.from(map.keys());
keys.push('more');
