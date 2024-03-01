const URL_CITY = "https://606efbdf0c054f001765814c.mockapi.io/api/v1/city";

const getCityData = async () => {
    const response = await fetch(URL_CITY);
    if (!response.ok) {
        throw new Error("Something wrong with City Api");
    }
    const data = await response.json();
    console.log("City-data");
    console.log(data);
    return data;
};

export {getCityData};
