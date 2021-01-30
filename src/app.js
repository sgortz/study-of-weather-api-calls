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

function getForecast(response) {
  console.log(response.data);

  let nextDayIcon = document.querySelector("#next-day-icon");
  nextDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
  );
  nextDayIcon.setAttribute(
    "alt",
    `${response.data.daily[1].weather[0].description}`
  );

  document.querySelector(".next-day-temp").innerHTML =
    `${Math.round(response.data.daily[1].temp.max)}` +
    "˚ | " +
    `${Math.round(response.data.daily[1].temp.min)}` +
    "˚";

  let secondDayIcon = document.querySelector("#second-day-icon");
  secondDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
  );
  secondDayIcon.setAttribute(
    "alt",
    `${response.data.daily[2].weather[0].description}`
  );

  document.querySelector(".second-day-temp").innerHTML =
    `${Math.round(response.data.daily[2].temp.max)}` +
    "˚ | " +
    `${Math.round(response.data.daily[2].temp.min)}` +
    "˚";

  let thirdDayIcon = document.querySelector("#third-day-icon");
  thirdDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
  );
  thirdDayIcon.setAttribute(
    "alt",
    `${response.data.daily[3].weather[0].description}`
  );
  document.querySelector(".third-day-temp").innerHTML =
    `${Math.round(response.data.daily[3].temp.max)}` +
    "˚ | " +
    `${Math.round(response.data.daily[3].temp.min)}` +
    "˚";

  let fourthDayIcon = document.querySelector("#fourth-day-icon");
  fourthDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
  );
  fourthDayIcon.setAttribute(
    "alt",
    `${response.data.daily[4].weather[0].description}`
  );

  document.querySelector(".fourth-day-temp").innerHTML =
    `${Math.round(response.data.daily[4].temp.max)}` +
    "˚ | " +
    `${Math.round(response.data.daily[4].temp.min)}` +
    "˚";

  let fifthDayIcon = document.querySelector("#fifth-day-icon");
  fifthDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
  );
  fifthDayIcon.setAttribute(
    "alt",
    `${response.data.daily[5].weather[0].description}`
  );

  document.querySelector(".fifth-day-temp").innerHTML =
    `${Math.round(response.data.daily[5].temp.max)}` +
    "˚ | " +
    `${Math.round(response.data.daily[5].temp.min)}` +
    "˚";

  let sixthDayIcon = document.querySelector("#sixth-day-icon");
  sixthDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`
  );
  sixthDayIcon.setAttribute(
    "alt",
    `${response.data.daily[6].weather[0].description}`
  );

  document.querySelector(".sixth-day-temp").innerHTML =
    `${Math.round(response.data.daily[6].temp.max)}` +
    "˚ | " +
    `${Math.round(response.data.daily[6].temp.min)}` +
    "˚";
}

function getCityCoords(response) {
  document.querySelector(
    "h1"
  ).innerHTML = `${response.data.name}, ${response.data.sys.country}`;

  let cityLatitude = response.data.coord.lat;
  let cityLongitude = response.data.coord.lon;

  let forecastapiKey = "87ea285fd528486819f9be1f3ac61b1d";
  let forecastapiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLatitude}&lon=${cityLongitude}&exclude=minutely,hourly&units=metric&appid=${forecastapiKey}`;

  axios.get(forecastapiUrl).then(getForecast);
}

function search(cityName) {
  let apiKey = "4cea025489823b86da62835c695c95d3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(getCityCoords);
}

function handleSearch(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#city-input");

  search(searchInput.value);
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

function handleCurrentButton(event) {
  event.preventDefault();
  alert("Hi");

  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", handleSearch);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", handleCurrentButton);
