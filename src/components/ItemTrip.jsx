import React from "react";
import tripImage from "../image/trip.png";
import "../style/itemTrip.scss";

const ItemTrip = () => {
    return (
        <div className="item">
            <img src={tripImage} alt="trip-image" />
            <div className="description">
                <div className="city">Berlin</div>
                <div className="date">
                    <span>14.07.2023 - 21.07.2023</span>
                </div>
            </div>
        </div>
    );
};

export default ItemTrip;
