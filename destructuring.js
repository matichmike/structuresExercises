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