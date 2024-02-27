import React from "react";
import "../style/homePage.scss";
import sun from "../image/sun.png";

import ItemTrip from "./ItemTrip";
import WeatherDay from "./weatherDay";

const HomePage = () => {
    const trip = [1, 1, 2];
    const day = [1, 1, 2, 32, 3, 3];

    return (
        <div className="home-page">
            <div className="flex-container">
                <div className="left-side">
                    <div className="wrapper">
                        <header>
                            <div className="title">
                                Weather <strong>Forecast</strong>
                            </div>
                        </header>
                        <main>
                            <div className="search">
                                {/* <div className="search-icon">icon</div> */}
                                <input
                                    type="text"
                                    placeholder="Search your trip"
                                />
                            </div>
                            <div className="trip-container">
                                <div className="flex-container">
                                    <div className="items-container">
                                        {trip.map((e, index) => (
                                            <ItemTrip key={index} />
                                        ))}
                                    </div>
                                    <div className="btn-container">
                                        <div className="btn">
                                            <span>add trip</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="weather-container">
                                <div className="weather-title">Week</div>
                                <div className="weather-items">
                                    {day.map((day, index) => (
                                        <WeatherDay key={index} />
                                    ))}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="right-side">
                    <div className="wrapper">
                        <div className="current-weather">
                            <div className="current-day">Sunday</div>
                            <div className="current-temperature">
                                <div className="temperature">
                                    28
                                    <img src={sun} alt="weather-image" />
                                    <div className="degree">
                                        &deg;<span>c</span>
                                    </div>
                                </div>
                            </div>
                            <div className="city-direction">Berlin</div>
                        </div>
                        <div className="timer">
                            <div className="flex-container">
                                <div className="num timer-days">
                                    <span>30</span> <br />
                                    days
                                </div>
                                <div className="num timer-hours">
                                    <span>15</span> <br />
                                    hours
                                </div>
                                <div className="num timer-minutes">
                                    <span>12</span> <br />
                                    minutes
                                </div>
                                <div className="num timer-seconds">
                                    <span>20</span> <br />
                                    seconds
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
