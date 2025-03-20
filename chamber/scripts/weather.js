const currentCond = document.querySelector('#cond');
const weatherIcon = document.querySelector('#weather-icon');
const futureForecast = document.querySelector('.forecast');


const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=41.74&lon=-111.83&units=imperial&appid=b99fc432ed06addb16967685aa3d1016';
const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.74&lon=-111.83&units=imperial&appid=b99fc432ed06addb16967685aa3d1016';


async function weatherFetch() {
    try {
      const weather = await fetch(weatherURL);

      if (weather.ok) {
        const weatherData = await weather.json();        
        console.log(weatherData); // testing only
        currentCond.innerHTML = displayWeather(weatherData); // uncomment when ready        
      } else {
          throw Error(await weather.text());
      }      
    } catch (error) {
        console.log(error);
    }
  }

  async function forecastFetch() {
    try {
      const forecast = await fetch(forcastURL);

      if (forecast.ok) {
        const forecastData = await forecast.json();
        console.log(forecastData);
        futureForecast.innerHTML = displayForecast(forecastData);
      } else {
        throw Error(await forecast.text());
      }
    } catch (error) {
        console.log(error);
    }
  } 

function displayWeather(data) {
  let list = document.createElement("ul");
  let temperature = document.createElement('li');
  let description = document.createElement('li');
  let high = document.createElement('li');
  let low = document.createElement('li');
  let humidity = document.createElement('li');
  let sunrise = document.createElement('li');
  let sunset = document.createElement('li');

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  temperature.innerHTML =  `${data.main.temp}&deg;F`;
  description.innerHTML = `${data.weather[0].description}`;
  high.innerHTML = `High: ${data.main.temp_max}&deg;F`;
  low.innerHTML = `Low: ${data.main.temp_min}&deg;F`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  sunrise.innerHTML = `Sunrise: ${data.sys.sunrise}am`;
  sunset.innerHTML = `Sunset: ${data.sys.sunset}pm`;

  list.appendChild(temperature);
  list.appendChild(description);
  list.appendChild(high);
  list.appendChild(low);
  list.appendChild(humidity);
  list.appendChild(sunrise);
  list.appendChild(sunset);
          
  currentCond.append(list);	
}

function displayForecast(data) {  
  const header = document.createElement('h2');
  const today = document.createElement('p');
  const tomorrow = document.createElement('p');
  const dayAfter = document.createElement('p');
  
  header.textContent = "Weather Forecast";
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let presentDate = new Date();
  console.log(presentDate);
  today.innerHTML = `Today: <strong> </strong>`;
  presentDate.setDate(presentDate.getDate() + 1);
  console.log(presentDate);
  tomorrow.innerHTML = `${presentDate.getDay()}: <strong> </strong>`;
  const dayAfterDate = presentDate.setDate(presentDate.getDate() + 1);
  dayAfter.innerHTML = `${weekday[presentDate.getDay()]}: <strong> </strong>`;
  
  console.log(presentDate);
  
  futureForecast.appendChild(header);
  futureForecast.appendChild(today);
  futureForecast.appendChild(tomorrow);
  futureForecast.appendChild(dayAfter);
  
}
  
weatherFetch();
forecastFetch();