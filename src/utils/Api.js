const BASE_URL = "https://api.example.com";

const storData = {
    cities: [],
};

async function fetchCity() {
    const response = await fetch(
        "https://606efbdf0c054f001765814c.mockapi.io/api/v1/city"
    );
    if (!response.ok) {
        throw new Error("Something wrong with City Api");
    }
    const data = await response.json();
    return data;
}

async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
}

async function fetchCityWeather(city) {
    const endpoint = `weather?city=${city}`;
    return fetchData(endpoint);
}

async function fetchTripData(tripId) {
    const endpoint = `trip?id=${tripId}`;
    return fetchData(endpoint);
}

export {fetchCity, fetchCityWeather, fetchTripData};
