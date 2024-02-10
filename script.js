// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c739e63773mshf52e1f1fd053630p1effd5jsn2088f042f705',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// const getWeather = (city) => {
//   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
//   .then(response => response.json())
//   .then((response) => {  
//     console.log(response);
//     populateWeatherData(response, city);
//   })
//   .catch(err => console.error(err));
// }

// const populateWeatherData = (weatherData, city) => {
//   document.getElementById(`${city}-cloud_pct`).innerHTML = weatherData.cloud_pct;
//   document.getElementById(`${city}-temp`).innerHTML = weatherData.temp;
//   document.getElementById(`${city}-feels_like`).innerHTML = weatherData.feels_like;
//   document.getElementById(`${city}-humidity`).innerHTML = weatherData.humidity;
//   document.getElementById(`${city}-min_temp`).innerHTML = weatherData.min_temp;
//   document.getElementById(`${city}-max_temp`).innerHTML = weatherData.max_temp;
//   document.getElementById(`${city}-wind_speed`).innerHTML = weatherData.wind_speed;
//   document.getElementById(`${city}-wind_degrees`).innerHTML = weatherData.wind_degrees;
//   document.getElementById(`${city}-sunrise`).innerHTML = weatherData.sunrise;
//   document.getElementById(`${city}-sunset`).innerHTML = weatherData.sunset;
// }

// // const populateWeatherData = (weatherData, city) => {
// //   const cityNameElement = document.getElementById("cityName");
// //   const cityFormatted = city.replace(/\s+/g, '_'); // Replace spaces with underscores for proper ID matching
// //   document.getElementById(`${cityFormatted}-cloud_pct`).innerHTML = weatherData.cloud_pct;
// //   document.getElementById(`${cityFormatted}-temp`).innerHTML = weatherData.temp;
// //   document.getElementById(`${cityFormatted}-feels_like`).innerHTML = weatherData.feels_like;
// //   document.getElementById(`${cityFormatted}-humidity`).innerHTML = weatherData.humidity;
// //   document.getElementById(`${cityFormatted}-min_temp`).innerHTML = weatherData.min_temp;
// //   document.getElementById(`${cityFormatted}-max_temp`).innerHTML = weatherData.max_temp;
// //   document.getElementById(`${cityFormatted}-wind_speed`).innerHTML = weatherData.wind_speed;
// //   document.getElementById(`${cityFormatted}-wind_degrees`).innerHTML = weatherData.wind_degrees;
// //   document.getElementById(`${cityFormatted}-sunrise`).innerHTML = weatherData.sunrise;
// //   document.getElementById(`${cityFormatted}-sunset`).innerHTML = weatherData.sunset;
// // }


// document.addEventListener("DOMContentLoaded", function() {
//   const submit = document.getElementById("submit");
//   const city = document.getElementById("city");
//   const cityName = document.getElementById("cityName");

//   // // Set default city to Delhi
//   const defaultCity = "Delhi";
//   cityName.innerHTML = defaultCity;
//   getWeather(defaultCity);

//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const cityValue = city.value;
//     cityName.innerHTML = cityValue;
//     getWeather(cityValue);
//   });

//   // Initialize with default cities
//   const defaultCities = ["Shanghai", "Kolkata", "Mumbai", "Hong Kong", "Toronto", "Bangalore"]; // Add more cities as needed
//   defaultCities.forEach(city => getWeather(city));
// });

// getWeather("Delhi");


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c739e63773mshf52e1f1fd053630p1effd5jsn2088f042f705',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// const getWeather = (city) => {
//   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
//   .then(response => response.json())
//   .then((response) => {  
//     console.log(response);
//     populateWeatherData(response, city);
//   })
//   .catch(err => console.error(err));
// }

// const populateWeatherData = (weatherData, city) => {
//   document.getElementById(`${city}-cloud_pct`).innerHTML = weatherData.cloud_pct;
//   document.getElementById(`${city}-temp`).innerHTML = weatherData.temp;
//   document.getElementById(`${city}-feels_like`).innerHTML = weatherData.feels_like;
//   document.getElementById(`${city}-humidity`).innerHTML = weatherData.humidity;
//   document.getElementById(`${city}-min_temp`).innerHTML = weatherData.min_temp;
//   document.getElementById(`${city}-max_temp`).innerHTML = weatherData.max_temp;
//   document.getElementById(`${city}-wind_speed`).innerHTML = weatherData.wind_speed;
//   document.getElementById(`${city}-wind_degrees`).innerHTML = weatherData.wind_degrees;
//   document.getElementById(`${city}-sunrise`).innerHTML = weatherData.sunrise;
//   document.getElementById(`${city}-sunset`).innerHTML = weatherData.sunset;
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const city = "Delhi";
//   const cityName = document.getElementById("cityName");
//   cityName.innerHTML = city;
//   getWeather(city);

//   const submit = document.getElementById("submit");
//   const cityInput = document.getElementById("city");

//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const cityValue = cityInput.value;
//     cityName.innerHTML = cityValue;
//     getWeather(cityValue);
//   });
// });

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c739e63773mshf52e1f1fd053630p1effd5jsn2088f042f705',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
  .then(response => response.json())
  .then((response) => {  
    console.log(response);
    populateWeatherData(response, city);
  })
  .catch(err => console.error(err));
}

const populateWeatherData = (weatherData, city) => {
  document.getElementById("cloud_pct").innerText = weatherData.cloud_pct;
  document.getElementById("temp").innerText = weatherData.temp;
  document.getElementById("feels_like").innerText = weatherData.feels_like;
  document.getElementById("humidity").innerText = weatherData.humidity;
  document.getElementById("min_temp").innerText = weatherData.min_temp;
  document.getElementById("max_temp").innerText = weatherData.max_temp;
  document.getElementById("wind_speed").innerText = weatherData.wind_speed;
  document.getElementById("wind_degrees").innerText = weatherData.wind_degrees;
  document.getElementById("sunrise").innerText = weatherData.sunrise;
  document.getElementById("sunset").innerText = weatherData.sunset;
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("submit");
  const city = document.getElementById("city");
  const cityName = document.getElementById("cityName");

  // Set default city to Delhi
  const defaultCity = "Delhi";
  cityName.innerText = defaultCity;
  getWeather(defaultCity);

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityValue = city.value;
    cityName.innerText = cityValue;
    getWeather(cityValue);
  });

  // Initialize with default cities
  const defaultCities = ["Shanghai", "Kolkata", "Mumbai", "Hong Kong", "Toronto", "Bangalore"]; // Add more cities as needed
  defaultCities.forEach(city => getWeather(city));
});

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'c739e63773mshf52e1f1fd053630p1effd5jsn2088f042f705',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// const getWeather = (city) => {
//   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
//   .then(response => response.json())
//   .then((response) => {  
//     console.log(response);
//     populateWeatherData(response, city);
//   })
//   .catch(err => console.error(err));
// }

// const populateWeatherData = (weatherData, city) => {
//   document.getElementById(`${city}-cloud_pct`).innerText = weatherData.cloud_pct;
//   document.getElementById(`${city}-temp`).innerText = weatherData.temp;
//   document.getElementById(`${city}-feels_like`).innerText = weatherData.feels_like;
//   document.getElementById(`${city}-humidity`).innerText = weatherData.humidity;
//   document.getElementById(`${city}-min_temp`).innerText = weatherData.min_temp;
//   document.getElementById(`${city}-max_temp`).innerText = weatherData.max_temp;
//   document.getElementById(`${city}-wind_speed`).innerText = weatherData.wind_speed;
//   document.getElementById(`${city}-wind_degrees`).innerText = weatherData.wind_degrees;
//   document.getElementById(`${city}-sunrise`).innerText = weatherData.sunrise;
//   document.getElementById(`${city}-sunset`).innerText = weatherData.sunset;
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const submit = document.getElementById("submit");
//   const cityInput = document.getElementById("city");
//   const cityName = document.getElementById("cityName");

//   // Set default city to Delhi
//   let defaultCity = "Delhi";
//   cityName.innerText = defaultCity;
//   getWeather(defaultCity);

//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const cityValue = cityInput.value;
//     cityName.innerText = cityValue;
//     getWeather(cityValue);
//   });

//   // Initialize with default cities
//   const defaultCities = ["Shanghai", "Kolkata", "Mumbai", "Hong Kong", "Toronto", "Bangalore"];
//   defaultCities.forEach(city => getWeather(city));
// });


// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'c739e63773mshf52e1f1fd053630p1effd5jsn2088f042f705',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// const getWeather = (city) => {
//   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
//   .then(response => response.json())
//   .then((response) => {  
//     console.log(response);
//     populateWeatherData(response, city);
//   })
//   .catch(err => console.error(err));
// }

// const populateWeatherData = (weatherData, city) => {
//   document.getElementById(`${city}-cloud_pct`).innerText = weatherData.cloud_pct;
//   document.getElementById(`${city}-temp`).innerText = weatherData.temp;
//   document.getElementById(`${city}-feels_like`).innerText = weatherData.feels_like;
//   document.getElementById(`${city}-humidity`).innerText = weatherData.humidity;
//   document.getElementById(`${city}-min_temp`).innerText = weatherData.min_temp;
//   document.getElementById(`${city}-max_temp`).innerText = weatherData.max_temp;
//   document.getElementById(`${city}-wind_speed`).innerText = weatherData.wind_speed;
//   document.getElementById(`${city}-wind_degrees`).innerText = weatherData.wind_degrees;
//   document.getElementById(`${city}-sunrise`).innerText = weatherData.sunrise;
//   document.getElementById(`${city}-sunset`).innerText = weatherData.sunset;
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const submit = document.getElementById("submit");
//   const cityInput = document.getElementById("city");
//   const cityName = document.getElementById("cityName");

//   // Set default city to Delhi
//   let defaultCity = "Delhi";
//   cityName.innerText = defaultCity;
//   getWeather(defaultCity);

//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const cityValue = cityInput.value;
//     cityName.innerText = cityValue;
//     getWeather(cityValue);
//   });

//   // Initialize with default cities
//   const defaultCities = ["Shanghai", "Kolkata", "Mumbai", "Hong Kong", "Toronto", "Bangalore"];
//   defaultCities.forEach(city => getWeather(city));
// });
