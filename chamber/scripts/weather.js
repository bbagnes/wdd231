const currentCond = document.querySelector('#current-cond');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=41.74&lon=--111.84&units=metric&appid=b99fc432ed06addb16967685aa3d1016';

async function apiFetch() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        currentCond.innerHTML = displayResults(data); // uncomment when ready        
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();