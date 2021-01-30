// Updating the subheading with current hour, date & time
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let now = new Date();
let weekday = days[now.getDay()];
let dateMonth = now.getDate();
let month = monthName[now.getMonth()];
let hour = now.getHours();
let minutes = now.getMinutes();

if (minutes.toString().length == 1) {
  minutes = "0" + minutes;
}

let smallHeading = document.querySelector("h2");
smallHeading.innerHTML = `${weekday}, ${month} ${dateMonth}, ${hour}:${minutes}`;

// Updating weekday names
let nextDay = document.querySelector(".next-day");
nextDay.innerHTML = days[now.getDay() + 1];

let secondDay = document.querySelector(".second-day");
secondDay.innerHTML = days[now.getDay() + 2];

let thirdDay = document.querySelector(".third-day");
thirdDay.innerHTML = days[now.getDay() + 3];

let fourthDay = document.querySelector(".fourth-day");
fourthDay.innerHTML = days[now.getDay() + 4];

let fifthDay = document.querySelector(".fifth-day");
fifthDay.innerHTML = days[now.getDay() + 5];

let sixthDay = document.querySelector(".sixth-day");
sixthDay.innerHTML = days[now.getDay() + 6];
