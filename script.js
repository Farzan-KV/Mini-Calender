const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const allMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(today);

date.innerHTML = (today.getDate()<10? "0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = today.getMonth();
year.innerHTML = today.getFullYear();
