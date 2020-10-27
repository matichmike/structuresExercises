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

//getLastDayOfMonth
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2013, 1))

//getSecondsToday
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff/1000);
}

//getSecondsToTomorrow
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}