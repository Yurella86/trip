import React, {Fragment, useEffect, useState} from "react";
import "../style/homePage.scss";
import {getWeatherData} from "../services/WeatherService";

import sun from "../image/sun.png";
import ItemTrip from "./ItemTrip";
import WeatherDay from "./weatherDay";
import ModalComponent from "./ModalComponent";

const HomePage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [isModal, setIsModal] = useState();
    const [tripData, setTripData] = useState();

    const trip = [1, 1, 2];
    const day = [1, 1, 2, 32, 3, 3];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWeatherData();
                setWeatherData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(tripData);
    }, [tripData]);

    const openModal = () => {
        setIsModal(true);
    };

    return (
        <Fragment>
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
                                        <div
                                            className="btn-container"
                                            onClick={openModal}
                                        >
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
                                        <img src={sun} alt="weather-icon" />
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

            {isModal ? (
                <ModalComponent
                    newTrip={(trip) => setTripData(trip)}
                    statusModal={(status) => setIsModal(status)}
                />
            ) : undefined}
        </Fragment>
    );
};

export default HomePage;
