import React, {Fragment, useContext, useEffect, useState} from "react";
import "../style/homePage.scss";
import {getWeatherRange, getWeatherToday} from "../services/Weather_API";

import ItemTrip from "./ItemTrip";
import WeatherDay from "./weatherDay";
import ModalComponent from "./ModalComponent";
import TripContext from "../store/TripContext";
import Timer from "./Timer";
import {getIcon} from "../utils/getIcon";

const HomePage = () => {
    const [isModal, setIsModal] = useState();
    const [tripData, setTripData] = useState([]);
    const [tripCity, setTripCity] = useState();
    const [tripCityStartDay, setTripCityStartDay] = useState();
    const [tripCityEndDay, setTripCityEndDay] = useState();
    const [weatherDataToday, setWeatherDataToday] = useState(null);
    const [weatherDataRange, setWeatherDataRange] = useState(null);

    const nameDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const tripCtx = useContext(TripContext);

    // const getIcon = () => {
    //     const weatherIcon = require(`../icons/${weatherDataToday.days[0].icon}.png`);
    //     return weatherIcon;
    // };

    const fetchWeatherToday = async (city) => {
        try {
            const data = await getWeatherToday(city);
            setWeatherDataToday(data);
        } catch (error) {
            console.error("Error fetching weather today data:", error);
        }
    };
    const fetchWeatherRange = async (city, startDay, endDay) => {
        try {
            const data = await getWeatherRange(city, startDay, endDay);
            setWeatherDataRange(data.days);
        } catch (error) {
            console.error("Error fetching weather today data:", error);
        }
    };

    const openModal = () => {
        setIsModal(true);
    };

    useEffect(() => {
        setTripData(tripCtx.items);
        setTripCity(tripCtx.items[0].city);
        setTripCityStartDay(tripCtx.items[0].startDate);
    }, [tripCtx.items]);

    useEffect(() => {
        fetchWeatherToday(tripCity);
        fetchWeatherRange(tripCity, tripCityStartDay, tripCityEndDay);
    }, [tripCity]);

    useEffect(() => {
        setTripData(tripCtx.items);
        setTripCity(tripCtx.items[0].city);
        setTripCityStartDay(tripCtx.items[0].startDate);
        setTripCityEndDay(tripCtx.items[0].endDate);
    }, []);

    if (
        !tripData ||
        !tripCityStartDay ||
        !weatherDataToday ||
        !weatherDataRange
    ) {
        return <div>loading...</div>;
    }

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
                                            {tripData
                                                ? tripData.map((trip) => (
                                                      <ItemTrip
                                                          key={trip.id}
                                                          image={trip.image}
                                                          city={trip.city}
                                                          startDate={
                                                              trip.startDate
                                                          }
                                                          endDate={trip.endDate}
                                                          callbackCity={(
                                                              city
                                                          ) =>
                                                              setTripCity(city)
                                                          }
                                                          callbackCityStart={(
                                                              day
                                                          ) =>
                                                              setTripCityStartDay(
                                                                  day
                                                              )
                                                          }
                                                          callbackCityEnd={(
                                                              day
                                                          ) =>
                                                              setTripCityEndDay(
                                                                  day
                                                              )
                                                          }
                                                      />
                                                  ))
                                                : null}
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
                                        {weatherDataRange
                                            ? weatherDataRange.map(
                                                  (day, index) => (
                                                      <WeatherDay
                                                          key={index}
                                                          nameDay={
                                                              nameDays[
                                                                  new Date(
                                                                      day.datetime
                                                                  ).getDay()
                                                              ]
                                                          }
                                                          icon={day.icon}
                                                          maxDeg={Math.round(
                                                              day.tempmax
                                                          )}
                                                          minDeg={Math.round(
                                                              day.tempmin
                                                          )}
                                                      />
                                                  )
                                              )
                                            : undefined}
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="wrapper">
                            <div className="current-weather">
                                <div className="current-day">
                                    {weatherDataToday
                                        ? nameDays[
                                              new Date(
                                                  weatherDataToday.days[0].datetime
                                              ).getDay()
                                          ]
                                        : undefined}
                                </div>
                                <div className="current-temperature">
                                    <div className="temperature">
                                        {weatherDataToday
                                            ? weatherDataToday.days[0].temp
                                            : undefined}
                                        <img
                                            src={getIcon(
                                                weatherDataToday.days[0].icon
                                            )}
                                            alt="weather-icon"
                                        />
                                        <div className="degree">
                                            &deg;<span>c</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="city-direction">
                                    {weatherDataToday
                                        ? weatherDataToday.address
                                        : undefined}
                                </div>
                            </div>
                            <Timer timeStart={tripCityStartDay} />
                        </div>
                    </div>
                </div>
            </div>

            {isModal ? (
                <ModalComponent statusModal={(status) => setIsModal(status)} />
            ) : undefined}
        </Fragment>
    );
};

export default HomePage;
