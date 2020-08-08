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