import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,

      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Sunday 11:05am",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary"
              />{" "}
            </div>
          </div>
        </form>

        <div className="container">
          <div className="row row-cols-4">
            <div className="col">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
            <div className="col-2 text-center">
              <img src={weatherData.iconUrl} alt={weatherData.decription} />
            </div>
            <div className="col-2 text-end">
              <span className="temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-5 text-end">
              <h5>{weatherData.date}</h5>
              <h1>{weatherData.city}</h1>

              <h6 className="text-capitalize">{weatherData.description}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ed1d03d83986af8d64630bead0e0f624";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
