import React from "react";
import FlightDeparture from "./FlightDeparture";
import FlightArrival from "./FlightArrival";
import { connect } from "react-redux/es/exports";
import {
  flightsErrorSelector,
  sortedFlightsListSelector,
} from "../flight/flight.selectors";

const Flight = ({ sortedFlightsList, isError }) => {
  if (isError) {
    return <div>Sorry, some error occured</div>;
  }

  return (
    <div className="flight">
      {sortedFlightsList?.length === 0 ? (
        <h1 className="finding-flight-error">
          Couldn't find a flight with that city name &#128531;
        </h1>
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
