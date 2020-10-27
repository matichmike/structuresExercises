// creating a date
let d = new Date(2012, 1, 20, 3, 12);

//display day of the week
function getWeekDay(date) {
  let days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
  return days[date.getDay()]
}

//getDateAgo
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 365));