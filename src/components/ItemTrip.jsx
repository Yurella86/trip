import React from "react";
import "../style/itemTrip.scss";

const ItemTrip = ({
    image,
    city,
    startDate,
    endDate,
    callbackCity,
    callbackCityStart,
    callbackCityEnd,
}) => {
    const handleTripClick = () => {
        callbackCity(city);
        callbackCityStart(startDate);
        callbackCityEnd(endDate);
    };

    return (
        <div className="item" onClick={handleTripClick}>
            <img src={image} alt="trip-image" />
            <div className="description">
                <div className="city">{city}</div>
                <div className="date">
                    <span>
                        {startDate} - {endDate}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ItemTrip;
