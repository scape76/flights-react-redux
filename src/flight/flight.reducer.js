import { loadFlights, error } from "./flight.actions";

const initialState = {
  flightsList: [],
  sortedFlightsList: [],
  isError: false,
};

const sortFlights = (flightsList, city) =>
  flightsList.filter((flight) =>
    flight.departure.timezone.toLowerCase().includes(city.toLowerCase())
  );

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case loadFlights: {
      return {
        ...state,
        isError: false,
        flightsList: action.payload.flights,
        sortedFlightsList: sortFlights(
          action.payload.flights,
          action.payload.city
        ),
      };
    }
    case error: {
      return {
        ...state,
        isError: true,
      };
    }
  }
};

export default flightReducer;
