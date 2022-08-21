import { fetchFlights } from "../flightGateway";

export const loadFlights = "Flights/load";
export const error = "Flights/error";

export const flightsLoader = (flights, city) => {
  return {
    type: loadFlights,
    payload: {
      flights,
      city,
    },
  };
};

export const getFlights = (city) => {
  const thunkAction = function (dispatch) {
    fetchFlights().then((result) => dispatch(flightsLoader(result.data, city)));
  };

  return thunkAction;
};

export const showError = () => {
  return {
    type: error,
  };
};
