import React, {useEffect, useState} from "react";
import "../style/modal.scss";
import {fetchCity} from "../utils/Api";
import {validateStartDate, validateEndDate} from "../utils/validationDate";

const ModalComponent = ({newTrip, statusModal}) => {
    const [cityData, setCityData] = useState();

    const [cityName, setCityName] = useState(0);
    const [startDateTrip, setStartDateTrip] = useState("");
    const [endDateTrip, setEndDateTrip] = useState("");

    const [cityError, setCityError] = useState(false);
    const [startDateError, setStartDateError] = useState(false);
    const [endDateError, setEndDateError] = useState(false);

    const [validationDateStart, setValidationDateStart] = useState("");
    const [validateDateRange, setValidateDateRange] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const validationStart = validateStartDate(startDateTrip);
        const validationEnd = validateEndDate(startDateTrip, endDateTrip);
        setValidationDateStart(validationStart);
        setValidateDateRange(validationEnd);

        if (validationStart === "-1" || validationStart === "+15") {
            return;
        }
        if (
            validationEnd === "-1" ||
            validationEnd === "-2" ||
            validationEnd === "+15"
        ) {
            return;
        }
        if (!cityName || !startDateTrip || !endDateTrip) {
            setCityError(!cityName);
            setStartDateError(!startDateTrip);
            setEndDateError(!endDateTrip);
            return;
        }

        const getCity = cityData.find((city) => city.name === cityName);
        const newTripData = {
            image: getCity.image,
            city: getCity.name,
            startDateTrip,
            endDateTrip,
        };

        newTrip(newTripData);
        clearFormData();
        statusModal(false);
    };

    const hendleClearForm = (e) => {
        e.preventDefault();
        clearFormData();
    };

    const closeModal = () => {
        clearFormData();
        statusModal(false);
    };

    const clearFormData = () => {
        setCityName(0);
        setStartDateTrip("");
        setEndDateTrip("");

        setCityError(false);
        setStartDateError(false);
        setEndDateError(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCity();
                data.sort((a, b) => (a.name > b.name ? 1 : -1));
                setCityData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchData();
    }, []);

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
                        <div className="field-city">
                            <label>
                                <span className="star">*</span>
                                City
                                {cityError && (
                                    <span className="require">
                                        Field is required
                                    </span>
                                )}
                            </label>
                            <select
                                name="city"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                            >
                                <option value={0} disabled>
                                    Please select a city
                                </option>
                                {cityData
                                    ? cityData.map((city) => (
                                          <option
                                              key={city.id}
                                              value={city.name}
                                          >
                                              {city.name}
                                          </option>
                                      ))
                                    : undefined}
                            </select>
                        </div>
                        <div className="field-start">
                            <label>
                                <span className="star">*</span>
                                Start date
                                {startDateError && (
                                    <span className="require">
                                        Field is required
                                    </span>
                                )}
                                {validationDateStart === "-1" && (
                                    <span className="require">
                                        The date must be a future
                                    </span>
                                )}
                                {validationDateStart === "+15" && (
                                    <span className="require">
                                        The date should not be more than 15 days
                                    </span>
                                )}
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
                        <div className="field-end">
                            <label>
                                <span className="star">*</span>
                                End date
                                {endDateError && (
                                    <span className="require">
                                        Field is required
                                    </span>
                                )}
                                {validateDateRange === "-1" && (
                                    <span className="require">
                                        The date must be a future
                                    </span>
                                )}
                                {validateDateRange === "-2" && (
                                    <span className="require">
                                        The date should not be earlier than the
                                        initial date
                                    </span>
                                )}
                                {validateDateRange === "+15" && (
                                    <span className="require">
                                        The date should not be more than 15 days
                                    </span>
                                )}
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
