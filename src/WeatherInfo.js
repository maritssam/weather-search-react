import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row row-cols-4">
          <div className="col">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-2 text-center">
            <div>
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          <div className="col-2 text-end">
            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-5 text-end">
            <h5>
              <FormattedDate date={props.data.date} size={64} />
            </h5>
            <h1>{props.data.city}</h1>

            <h6 className="text-capitalize">{props.data.description}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
