import {API_KEY_WEATHER} from "./config";

const BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const getWeatherRange = async (city, startDay, endDay) => {
    const apiUrl = `${BASE_URL}/${city}/${startDay}/${endDay}?unitGroup=metric&key=${API_KEY_WEATHER}&amp;contentType=json`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Something wrong with response Weather Range data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Weather Range data:", error);
        throw error;
    }
};

export const getWeatherToday = async (city) => {
    const apiUrl = `${BASE_URL}/${city}/today?unitGroup=metric&key=${API_KEY_WEATHER}&contentType=json`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Something wrong with response Weather Today data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Weather Today data:", error);
        throw error;
    }
};
