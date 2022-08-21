export const flightsListSelector = (state) => state.flights.flightsList;
export const sortedFlightsListSelector = (state) =>
  state.flights.sortedFlightsList;
export const flightsErrorSelector = (state) => state.flights.isError;
