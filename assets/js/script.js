var apiKey = "1544239b6e1f3e8650aa09b41b1e3664";
var cityInput = document.querySelector('#city-search');

 function getCity() {
   var city = cityInput;  
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=${apiKey}&cnt=5&units=imperial`)
    .then(response => console.log(response))
}

getCity();

