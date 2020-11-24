// simple class example with static utiity method
class Student {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `The full name is ${this.firstName} ${this.lastName}`
  }
  markLate(){
    this.tardies += 1;
    if(this.tardies >= 3) {
      return `You are expelled, ${this.firstName}`
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a,b) => a + b);
    return sum/this.scores.length;
  }
  static EnrollStudents() {
    return "enrolling students"
  }
}
let firstStudent = new Student("Colt", "Steele");

// calling the utility method on all instances of Student class
Student.EnrollStudents();

// statis utility method example
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  static distance(a,b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(5,5);
const p2 = new Point(10,10);
console.log(Point.distance(p1, p2));

//timer class
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render();
    }, 1000);
  }
}