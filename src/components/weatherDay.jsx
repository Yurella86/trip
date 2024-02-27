import React from "react";
import sun from "../image/sun.png";
import "../style/weatherDay.scss";

const WeatherDay = () => {
    return (
        <div className="day">
            <div className="day-title">Monday</div>
            <img src={sun} alt="weather-image" />
            <div className="temperature">28&deg;/21&deg;</div>
        </div>
    );
};

export default WeatherDay;
