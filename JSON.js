// stringify with replacer
let room = {
  number: 23
};
let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room
};
room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  return (key == 'occupiedBy') ? undefined : value;
}, 2));

// parse with new date
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;
schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
console.log(schedule.meetups[1].date.getDate());

// eliminate the loopin links
let room = {
  number: 23
};

let meetup = {
  title: "Huddle",
  occupiedBy: [{name: "Ivanov"}, {name: "Petrov"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}))