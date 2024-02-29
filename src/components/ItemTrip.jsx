import React from "react";
import tripImage from "../image/trip.png";
import "../style/itemTrip.scss";

const ItemTrip = ({image, city, startDateTrip, endDateTrip}) => {
    return (
        <div className="item">
            <img src={image} alt="trip-image" />
            <div className="description">
                <div className="city">{city}</div>
                <div className="date">
                    <span>
                        {startDateTrip} - {endDateTrip}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ItemTrip;
