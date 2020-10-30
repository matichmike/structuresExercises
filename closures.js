// function with double parenthesis
function sum(a) {
  return function(b) {
    return a + b;
  };
}
alert(sum(1)(2));

// inBetween filter
function inBetween(a,b) {
  return function(x) {
    return x >= a && x <= b
  };
}
let arr = [1,2,3,4,5,6,7];
alert(arr.filter(inBetween(3,6)));

// inArray filter
function inArray(arr) {
  return function(x) {
    return arr.includes(x)
  };
}

let arr = [1,2,3,4,5,6,7];
alert(arr.filter(inArray([1,2,10])));

// sort by value
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(field) {
  return (a,b) => a[field] > b[field] ? 1 : -1;
}
users.sort(byField('name'));
users.forEach(user => alert(user.name))