// Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27
let fruits = {
  apples: 25,
  oranges: 32,
  plums: 28
};
let newObj = {
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
Object.assign(fruits, newObj);
console.log(fruits);

// Set the value of the online key to 45
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
console.log(userActivity);

// Return the current value of the scannedItem key in the foods object
let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  return foods1[scannedItem];
}
console.log(checkInventory("apples"));

// Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
['oranges', 'plums', 'strawberries'].forEach(elem => delete foods[elem]);
console.log(foods);
