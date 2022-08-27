import { fetchFlights } from "../flightGateway";

export const loadFlights = "Flights/load";
export const error = "Flights/error";
export const loadingState = "Flight/loading";

export const flightsLoader = (flights, city) => {
  return {
    type: loadFlights,
    payload: {
      flights,
      city,
    },
  };
};

export const flightsLoadingState = () => {
  return {
    type: loadingState,
  };
};

export const getFlights = (city) => {
  const thunkAction = function (dispatch) {
    dispatch(flightsLoadingState());
    fetchFlights().then((result) => dispatch(flightsLoader(result.data, city)));
  };

  return thunkAction;
};

export const showError = () => {
  return {
    type: error,
  };
};
