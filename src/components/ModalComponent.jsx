import React, {useState} from "react";
import "../style/modal.scss";

const ModalComponent = ({newTrip, statusModal}) => {
    const cityData = ["LV", "LV", "BC"];
    const [city, setCity] = useState(0);
    const [startDateTrip, setStartDateTrip] = useState("");
    const [endDateTrip, setEndDateTrip] = useState("");

    const closeModal = () => {
        statusModal(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newTripData = {
            city,
            startDateTrip,
            endDateTrip,
        };

        newTrip(newTripData);
        statusModal(false);
    };

    const hendleClearForm = (e) => {
        e.preventDefault();

        setCity(0);
        setStartDateTrip("");
        setEndDateTrip("");
    };

    return (
        <div className="modal">
            <form onSubmit={handleFormSubmit}>
                <div className="modal-wrapper">
                    <div className="modal-head">
                        <div className="flex-container">
                            <div className="modal-title">Create trip</div>
                            <div className="exit" onClick={closeModal}></div>
                        </div>
                        <hr />
                    </div>
                    <div className="modal-content">
                        <div className="field">
                            <label>
                                <span className="star">*</span>
                                City
                            </label>
                            <select
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <option value={0} disabled>
                                    Please select a city
                                </option>
                                {cityData.map((city) => (
                                    <option value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label>
                                <span className="star">*</span>
                                Start date
                            </label>
                            <input
                                type="date"
                                name="start-date"
                                id="start-date"
                                placeholder="Select date"
                                value={startDateTrip}
                                onChange={(e) =>
                                    setStartDateTrip(e.target.value)
                                }
                            />
                        </div>
                        <div className="field">
                            <label>
                                <span className="star">*</span>
                                End date
                            </label>
                            <input
                                type="date"
                                name="end-date"
                                id="end-date"
                                placeholder="Select date"
                                value={endDateTrip}
                                onChange={(e) => setEndDateTrip(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="button-wrap">
                        <div className="flex-container">
                            <button onClick={hendleClearForm}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ModalComponent;
