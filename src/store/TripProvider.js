import React, {useReducer} from "react";
import TripContext from "./TripContext";

const defaultTripState = {
    items: [
        {
            id: 0,
            image: "https://forbes.ua/static/storage/thumbs/340x340/e/52/bf9a1e89-63b6b1879c1d50a8982e35b6999ad52e.jpg?v=4316_1",
            city: "Львів",
            startDate: "2024-03-05",
            endDate: "2024-03-07",
        },
    ],
};

const tripReducer = (state, action) => {
    if (action.type === "ADD") {
        const updateItems = state.items.concat({
            id: state.items.length,
            image: action.item.image,
            city: action.item.city,
            startDate: action.item.startDateTrip,
            endDate: action.item.endDateTrip,
        });
        const sortItems = updateItems.sort(
            (a, b) => new Date(a.startDate) - new Date(b.startDate)
        );
        console.log(updateItems);
        return {
            items: sortItems,
        };
    }
    // if (action.type === "REMOVE") {
    //     console.log("remove");
    // }
    return defaultTripState;
};

const TripProvider = (props) => {
    const [tripState, dispatchAction] = useReducer(
        tripReducer,
        defaultTripState
    );

    const addTrip = (item) => {
        dispatchAction({type: "ADD", item});
    };
    // const removeTrip = (id) => {
    //     dispatchAction({type: "REMOVE", id});
    // };

    const cartProducts = {
        items: tripState.items,
        addItem: addTrip,
        // removeItem: removeTrip,
    };

    return (
        <TripContext.Provider value={cartProducts}>
            {props.children}
        </TripContext.Provider>
    );
};

export default TripProvider;
