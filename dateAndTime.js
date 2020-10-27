// creating a date
let d = new Date(2012, 1, 20, 3, 12);

//display day of the week
function getWeekDay(date) {
  let days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
  return days[date.getDay()]
}