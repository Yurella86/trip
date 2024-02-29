export const validateStartDate = (inputDate) => {
    let currentDate = new Date();

    let parts = inputDate.split("-");
    let year = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1;
    let day = parseInt(parts[2], 10);

    let inputDateObject = new Date(year, month, day);

    if (inputDateObject < currentDate) {
        return "-1";
    }

    let differenceInTime = inputDateObject.getTime() - currentDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    console.log(differenceInDays);

    if (differenceInDays > 15) {
        return "+15";
    }
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
        return "-1";
    }

    if (endDateObject < startDateObject) {
        return "-2";
    }

    let differenceInTime = endDateObject.getTime() - currentDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    console.log(differenceInDays);

    if (differenceInDays > 15) {
        return "+15";
    }

    return "1";
};
