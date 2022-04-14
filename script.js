const clock = document.querySelector(".clock");
const api_time_url = "https://worldtimeapi.org/api/timezone/Europe/Lisbon";
const weather = document.querySelector(".weather");
const api_weather_url =
  "https://api.openweathermap.org/data/2.5/weather?lat=41.15&lon=-8.61024&appid=9f3e12bb5cf04b50d55963aba3526d3d&units=metric";

getTime();
getWeather();

async function getTime() {
  const response = await fetch(api_time_url);
  const data = await response.json();
  const date = data.datetime;
  const hour = date.slice(11, 16);

  clock.innerHTML = hour;
}

async function getWeather() {
  const response = await fetch(api_weather_url);
  const data = await response.json();
  const temp = data.main.temp;

  weather.innerHTML = temp + "°C";
}
