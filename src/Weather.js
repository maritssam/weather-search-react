import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />{" "}
          </div>
        </div>
      </form>
      <h1>Victoria</h1>

      <div className="container">
        <div className="row row-cols-4">
          <div className="col">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
            />
            <span className="temp"> 16°C</span>
          </div>
          <div className="col">
            <ul>
              <li>Humidity: 57%</li>
              <li>Wind: 11 km/h</li>
            </ul>
          </div>
          <div className="col-6 text-end">
            <h5>Saturday 12:15pm</h5>
            <h6>Mostly Cloudy</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
