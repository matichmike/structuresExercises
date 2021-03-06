//arrays destructuring example
const companies = ['samsung', 'apple', 'nintendo'];
const [first, second, third] = companies;

const [theFirst, ...theRest] = companies;

//object destructuring example
const planet = {
  name: 'Hosnian Prime',
  faction: 'New Republic',
  weather: 'Temperate'
};

const {name, faction, weather} = planet;

//assigning different variables to desctructured values
const {
  name: system,
  faction: team,
  weather: conditions
} = planet;

//handling of options
function shipGenerator(options ={}) {
  const {
    cannons = 2,
    engines = 3,
    crew = 5,
  } = options;

  return `ship has ${cannons} cannons, ${engines} engines, ${crew} crew`
}

console.log(shipGenerator());
console.log(shipGenerator({cannons: 0}))

// destructuring fn example
let options = {
  title: "my Menu",
  items: ["item 1", "item 2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,
  height: h = 200,
  items: [item1, item2]
}) {
  return(`${title} ${w} ${h} ${item1} ${item2}`)
}
console.log(showMenu(options));

// destructuring example
let user = {
  name: "John",
  years: 30
};
let {name, years: age, isAdmin = false} = user;

// max salary destructuring example
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalary(salaries));