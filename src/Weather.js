import React from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const apiKey = "ed1d03d83986af8d64630bead0e0f624";
  let city = "Victoria";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
              <li>Humidity: 57%</li>
              <li>Wind: 11 km/h</li>
            </ul>
          </div>
          <div className="col-2 text-center">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
            />
          </div>
          <div className="col-2 text-end">
            <span className="temp"> 13</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-5 text-end">
            <h1>Victoria</h1>
            <h5>Saturday 12:15pm</h5>
            <h6>Mostly Cloudy</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
