const currentCond = document.querySelector('#cond');
const weatherIcon = document.querySelector('#weather-icon');
const futureForecast = document.querySelector('.forecast');
const today = document.querySelector('.today');
const tomorrow = document.querySelector('.tomorrow');
const dayAfter = document.querySelector('.dayAfter');


const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=41.74&lon=-111.83&units=imperial&appid=b99fc432ed06addb16967685aa3d1016';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.74&lon=-111.83&units=imperial&appid=b99fc432ed06addb16967685aa3d1016';
weatherFetch();
forecastFetch();

async function weatherFetch() {
    try {
      const weather = await fetch(weatherURL);

      if (weather.ok) {
        const weatherData = await weather.json();        
        // console.log(weatherData); // testing only
        displayWeather(weatherData); // uncomment when ready        
      } else {
          throw Error(await weather.text());
      }      
    } catch (error) {
        console.log(error);
    }
  }

  async function forecastFetch() {
    try {
      const forecast = await fetch(forecastURL);

      if (forecast.ok) {
        const forecastData = await forecast.json();
        // console.log(forecastData);
        displayForecast(forecastData);
      } else {
        throw Error(await forecast.text());
      }
    } catch (error) {
        console.log(error);
    }
  } 

function displayWeather(data) {
  
  let temperature = document.createElement('p');
  let description = document.createElement('p');
  let high = document.createElement('p');
  let low = document.createElement('p');
  let humidity = document.createElement('p');

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  temperature.innerHTML =  `${data.main.temp.toFixed(1)}&deg;F`;
  description.innerHTML = `${data.weather[0].description}`;
  high.innerHTML = `High: ${data.main.temp_max.toFixed(1)}&deg;F`;
  low.innerHTML = `Low: ${data.main.temp_min.toFixed(1)}&deg;F`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

  currentCond.appendChild(temperature);
  currentCond.appendChild(description);
  currentCond.appendChild(high);
  currentCond.appendChild(low);
  currentCond.appendChild(humidity);
          
  currentCond.append(list);	
}

function displayForecast(data) {  
    
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let presentDate = new Date();
  
  today.innerHTML = `Today: <strong>${data.list[0].main.temp.toFixed(1)}&deg;F</strong>`;

  let tomorrowDate = presentDate.setDate(presentDate.getDate() + 1);
  tomorrowDate = new Date(tomorrowDate);
  tomorrowDate = weekday[tomorrowDate.getDay()];
  tomorrow.innerHTML = `${tomorrowDate}: <strong>${data.list[9].main.temp.toFixed(1)}&deg;F</strong>`;
  
  let dayAfterDate = presentDate.setDate(presentDate.getDate() + 1);
  dayAfterDate = new Date(dayAfterDate);
  dayAfterDate = weekday[dayAfterDate.getDay()];
  dayAfter.innerHTML = `${dayAfterDate}: <strong>${data.list[17].main.temp.toFixed(1)}&deg;F</strong>`; 
  
}
  