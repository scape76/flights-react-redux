import React from "react";
import FlightDeparture from "./FlightDeparture";
import FlightArrival from "./FlightArrival";
import { connect } from "react-redux/es/exports";
import {
  flightsErrorSelector,
  sortedFlightsListSelector,
} from "../flight/flight.selectors";

const Flight = ({ sortedFlightsList, isError }) => {
  return (
    <div className="flight">
      {isError ? (
        <h1>&#11093; Please, enter real city</h1>
      ) : (
        <>
          <FlightDeparture />
          <FlightArrival />
        </>
      )}
    </div>
  );
};

const mapState = (state) => {
  return {
    sortedFlightsList: sortedFlightsListSelector(state),
    isError: flightsErrorSelector(state),
  };
};

export default connect(mapState)(Flight);
