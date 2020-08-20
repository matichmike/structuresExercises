const operatives = [
  { id: 12, name: 'John', pilot: false },
  { id: 44, name: 'Jack', pilot: true },
  { id: 59, name: 'Jade', pilot: false },
  { id: 122, name: 'Jen', pilot: false }
];
//returns true as soon there is a first true
const listHasPilots = operatives.some(operative => operative.pilot);

//returns true only when each element returns true
const listHasAllPilots = operatives.every(operative => operative.pilot);

//finds the first value and returns it
const firstPilot = operatives.find(operative => operative.pilot);
