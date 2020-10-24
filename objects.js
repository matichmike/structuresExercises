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

// Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(obj) {
return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(name => obj.hasOwnProperty(name))
}
console.log(isEveryoneHere(users));

// return the number of users whose online property is set to true
function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result ++;
    }
  }
  return result;
}

// Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
console.log(getArrayOfUsers(users));

//function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
userObj.data.friends.push(friend);
return userObj.data.friends;
}
console.log(addFriend(user, 'Pete'));

// sum salaries obj

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

// the same with a reducer
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a,b) => a + b, 0)
}