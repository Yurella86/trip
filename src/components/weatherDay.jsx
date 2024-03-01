import React from "react";
import "../style/weatherDay.scss";
import {getIcon} from "../utils/getIcon";

const WeatherDay = ({nameDay, icon, maxDeg, minDeg}) => {
    const weatherIcon = getIcon(icon);

    return (
        <div className="day">
            <div className="day-title">{nameDay}</div>
            <img src={weatherIcon} alt="weather" />
            <div className="temperature">
                {maxDeg}&deg;/{minDeg}&deg;
            </div>
        </div>
    );
};

export default WeatherDay;
