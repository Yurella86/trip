export const getCityData = async () => {
    const apiUrl = `https://countriesnow.space/api/v0.1/countries/info?returns=flag
    `;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        console.log("City" + data);
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};
