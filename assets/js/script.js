var todayDate = moment().format('dddd, LL');
$("#current-date-display-span").html(todayDate);

citySearch.addEventListener("click", findCity)
var cityList = {};
var currentCity = $("#current-city");

var weatherIcon = $('#icon');
var currentTemperature = $("#current-temperature");
var currentHumidity = $("#current-humidity");
var currentWSpeed = $("#current-wind");
var currentUvIndex = $("#uv");
var clearHistory = $('#clearBtn');

// day 1
var day1 = document.querySelector('#Day-1');
var day1Icon = document.querySelector('#day-1-ico');
var day1Temp = document.querySelector('#day-1-temperature');
var day1Wind = document.querySelector('#day-1-wind');
var day1Humid = document.querySelector('#day-1-humidity');

// day 2
var day2 = document.querySelector('#Day-2');
var day2Icon = document.querySelector('#day-2-ico');
var day2Temp = document.querySelector('#day-2-temperature');
var day2Wind = document.querySelector('#day-2-wind');
var day2Humid = document.querySelector('#day-2-humidity');

// day 3
var day3 = document.querySelector('#Day-3');
var day3Icon = document.querySelector('#day-3-ico');
var day3Temp = document.querySelector('#day-3-temperature');
var day3Wind = document.querySelector('#day-3-wind');
var day3Humid = document.querySelector('#day-3-humidity');

// day 4
var day4 = document.querySelector('#Day-4');
var day4Icon = document.querySelector('#day-4-ico');
var day4Temp = document.querySelector('#day-4-temperature');
var day4Wind = document.querySelector('#day-4-wind');
var day4Humid = document.querySelector('#day-4-humidity');

// day 5
var day5 = document.querySelector('#Day-5');
var day5Icon = document.querySelector('#day-5-ico');
var day5Temp = document.querySelector('#day-5-temperature');
var day5Wind = document.querySelector('#day-5-wind');
var day5Humid = document.querySelector('#day-5-humidity');


var formSubmitHandler = function(event) {
  event.preventDefault();
} 

function findCity() {
  var searchTerm = document.getElementById('search-input').value;

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    searchTerm +
    '&appid=1544239b6e1f3e8650aa09b41b1e3664' +
    '&units=imperial'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      var city = (response.name);
      console.log(city);
      currentCity.text(city)

      var temp = (response.main.temp);
      console.log(temp);
      currentTemperature.text(temp);

      var humid = (response.main.humidity);
      console.log(humid);
      currentHumidity.text(humid);

      var speed = (response.wind.speed);
      console.log(speed);
      currentWSpeed.text(speed);

      // use coordinates to get uv index
      var resultLon = response.coord.lon;
      var resultLat = response.coord.lat;
      console.log(resultLat, resultLon);

      // fetches uv index by using lattitude & longitude variables
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${resultLat}&lon=${resultLon}&units=imperial&&appid=1544239b6e1f3e8650aa09b41b1e3664`)
        .then(function (response) {
          return response.json();
        }).then(function (response) {
          console.log(response);

           // 5 day forecast (day 1 of 5)
           day1.textContent = (moment().add(1,'day').format("MM/DD/YY"));
           day1Icon.innerHTML = "<img src="+`http://openweathermap.org/img/w/${response.daily[1].weather[0].icon}.png`+' width="50" height="50">'
           day1Temp.textContent = `${response.daily[1].temp.day}°F`;
           day1Wind.textContent = ` ${response.daily[1].wind_speed} MPH`;
           day1Humid.textContent = ` ${response.daily[1].humidity}%`;

           // 5 day forecast (day 2 of 5)
           day2.textContent = (moment().add(2,'day').format("MM/DD/YY"));
           day2Icon.innerHTML = "<img src="+`http://openweathermap.org/img/w/${response.daily[2].weather[0].icon}.png`+' width="50" height="50">'
           day2Temp.textContent = `${response.daily[2].temp.day}°F`;
           day2Wind.textContent = ` ${response.daily[2].wind_speed} MPH`;
           day2Humid.textContent = ` ${response.daily[2].humidity}%`;

           // 5 day forecast (day 3 of 5)
           day3.textContent = (moment().add(3,'day').format("MM/DD/YY"));
           day3Icon.innerHTML = "<img src="+`http://openweathermap.org/img/w/${response.daily[3].weather[0].icon}.png`+' width="50" height="50">'
           day3Temp.textContent = `${response.daily[3].temp.day}°F`;
           day3Wind.textContent = ` ${response.daily[3].wind_speed} MPH`;
           day3Humid.textContent = ` ${response.daily[3].humidity}%`;
           
           // 5 day forecast (day 4 of 5)
           day4.textContent = (moment().add(4,'day').format("MM/DD/YY"));
           day4Icon.innerHTML = "<img src="+`http://openweathermap.org/img/w/${response.daily[4].weather[0].icon}.png`+' width="50" height="50">'
           day4Temp.textContent = `${response.daily[4].temp.day}°F`;
           day4Wind.textContent = ` ${response.daily[4].wind_speed} MPH`;
           day4Humid.textContent = ` ${response.daily[4].humidity}%`;

           // 5 day forecast (day 5 of 5)
           day5.textContent = (moment().add(5,'day').format("MM/DD/YY"));
           day5Icon.innerHTML = "<img src="+`http://openweathermap.org/img/w/${response.daily[5].weather[0].icon}.png`+' width="50" height="50">'
           day5Temp.textContent = `${response.daily[5].temp.day}°F`;
           day5Wind.textContent = ` ${response.daily[5].wind_speed} MPH`;
           day5Humid.textContent = ` ${response.daily[5].humidity}%`; 
        })
    })

}

function searchHistory() {
  var searchTerm = document.getElementById('search-input').value;



}