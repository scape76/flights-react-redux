import { loadFlights, error, loadingState } from "./flight.actions";

const initialState = {
  flightsList: [],
  sortedFlightsList: undefined,
  isError: false,
  isLoading: false,
};

const sortFlights = (flightsList, city) => {
  return flightsList.filter((flight) => {
    if (flight.departure.timezone === null) {
      return false;
    }
    flight.departure.timezone.toLowerCase().includes(city.toLowerCase());
  });
};

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
        isLoading: false,
      };
    }
    case error: {
      return {
        ...state,
        isError: true,
        sortedFlightsList: undefined,
        isLoading: false,
      };
    }

    case loadingState: {
      return {
        ...state,
        isError: false,
        sortedFlightsList: undefined,
        isLoading: true,
      };
    }
  }
};

export default flightReducer;
