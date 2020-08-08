// form array of Ids
const officers = [
  { id: 20, name: 'Captain' },
  { id: 24, name: 'General' },
  { id: 56, name: 'Admiral' },
  { id: 88, name: 'Commander' }
];

console.log(officers.map(officer => officer.id));

// total years of experience and the most experienced employee
const employees = [
  {
    id: 10,
    name: "Joe",
    years: 14,
  },
  {
    id: 2,
    name: "John",
    years: 30,
  },
  {
    id: 41,
    name: "Jim",
    years: 32,
  },
  {
    id: 99,
    name: "Jeremy",
    years: 22,
  }
];

console.log(employees.reduce((accumulator, employee) => accumulator + employee.years, 0))

console.log(
  employees.reduce(function(oldest, employee) {
    return (oldest.years || 0) > employee.years ? oldest : employee;
  }, {})
  )

  // form 2 arrays - for rebels and empire
  const pilots = [
    {
      id: 2,
      name: "Wedge",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane",
      faction: "Rebels",
    }
  ];

  const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
  const empire = pilots.filter(pilot => pilot.faction === "Empire");

  console.log("Rebels - ", rebels, "Empire - ", empire);

  // get the total score of force users only
  const personnel = [
    {
      id: 5,
      name: "Luke",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

// const forcePersonnel = personnel.filter(person => person.isForceUser);
// const forceScoreArr = forcePersonnel.map(jedi => jedi.pilotingScore + jedi.shootingScore);
// const forceTotalScore = forceScoreArr.reduce((accum, score) => accum + score, 0);

const result = personnel.filter(person => person.isForceUser).map(jedi => jedi.pilotingScore + jedi.shootingScore).reduce((accum, score) => accum + score, 0);
console.log("Total score", result);