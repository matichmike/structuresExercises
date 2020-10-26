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