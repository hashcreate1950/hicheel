const main = async () => {
  const city = document.getElementById("city-input").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a`
    );

    const data = await response.json();

    class Weather {
      constructor(city, temperature, description, icon) {
        this.city = city;
        this.temperature = temperature;
        this.description = description;
        this.icon = icon;
      }
    }

    const weather = new Weather(
      data.name,
      data.main.temp,
      data.weather[0].description,
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );

    setBackgroundByWeather(data.weather[0].main);

    const weatherContainer = document.getElementById("weather-container");
    const userDiv = document.createElement("div");
    userDiv.className = "weather-info";
    userDiv.innerHTML = `
      <h2>${weather.city}</h2>
      <p>${weather.temperature} °C</p>
      <p>${weather.description}</p>
      <img src="${weather.icon}" width="100" alt="${weather.description}" />
    `;
    weatherContainer.innerHTML = "";
    weatherContainer.appendChild(userDiv);

    const nowUTC = Math.floor(Date.now() / 1000);
    const timezoneOffset = data.timezone;
    const localTime = nowUTC + timezoneOffset;

    const isNight = localTime < data.sys.sunrise || localTime > data.sys.sunset;

    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(isNight ? "dark-mode" : "light-mode");
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Something went wrong. Please try again later.");
  }
};

function setBackgroundByWeather(condition) {
  const body = document.body;
  let gradient;

  switch (condition.toLowerCase()) {
    case "clear":
      gradient = "linear-gradient(to top, #2980b9, #6dd5fa)";
      break;
    case "clouds":
      gradient = "linear-gradient(to top, #bdc3c7, #2c3e50)";
      break;
    case "rain":
    case "drizzle":
      gradient = "linear-gradient(to top, #2c3e50, #4ca1af)";
      break;
    case "thunderstorm":
      gradient = "linear-gradient(to top, #0f2027, #203a43, #2c5364)";
      break;
    case "snow":
      gradient = "linear-gradient(to top, #e6dada, #274046)";
      break;
    case "mist":
    case "fog":
      gradient = "linear-gradient(to top, #757f9a, #d7dde8)";
      break;
    default:
      gradient = "linear-gradient(to top, #bdc3c7, #2c3e50)";
  }

  body.style.background = gradient;
}

document.getElementById("get-weather").addEventListener("click", main);

document.getElementById("city-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    main();
  }
});
