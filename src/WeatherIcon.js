import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="#94c7dd"
      size={64}
      animate={true}
    />
  );
}