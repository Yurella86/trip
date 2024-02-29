export const validateStartDate = (inputDate) => {
    let currentDate = new Date();

    let parts = inputDate.split("-");
    let year = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1;
    let day = parseInt(parts[2], 10);

    let inputDateObject = new Date(year, month, day);

    if (inputDateObject < currentDate) {
        // setValidateDateFutureError(true);
        return "-1";
    }
    // setValidateDateFutureError(false);

    let differenceInTime = inputDateObject.getTime() - currentDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    console.log(differenceInDays);

    if (differenceInDays > 15) {
        // setValidateDateRangeError(true);
        return "+15";
    }
    // setValidateDateRangeError(false);
    return "1";
};

export const validateEndDate = (startDate, endDate) => {
    let currentDate = new Date();

    let startParts = startDate.split("-");
    let startYear = parseInt(startParts[0], 10);
    let startMonth = parseInt(startParts[1], 10) - 1;
    let startDay = parseInt(startParts[2], 10);

    let endParts = endDate.split("-");
    let endYear = parseInt(endParts[0], 10);
    let endMonth = parseInt(endParts[1], 10) - 1;
    let endDay = parseInt(endParts[2], 10);

    let startDateObject = new Date(startYear, startMonth, startDay);
    let endDateObject = new Date(endYear, endMonth, endDay);

    if (endDateObject < currentDate) {
        return "-1"; // Ви можете змінити повернене значення на те, що підходить до вашого використання
    }

    if (endDateObject < startDateObject) {
        return "-2"; // Якщо endDate раніше startDate
    }

    let differenceInTime = endDateObject.getTime() - currentDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    console.log(differenceInDays);

    if (differenceInDays > 15) {
        return "+15"; // Якщо перевищено обмеження на 15 днів
    }

    return "1"; // Якщо все в порядку
};
