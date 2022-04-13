const clock = document.getElementById(".clock");
const api_time_url = "https://worldtimeapi.org/api/timezone/Europe/Lisbon";

getData();

async function getData() {
  const response = await fetch(api_time_url);
  const data = await response.json();
  const date = data.datetime;
  const hour = date.slice(11, 16);

  clock.innerHTML = hour;
}
