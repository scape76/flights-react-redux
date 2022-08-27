import React from "react";
import FlightInput from "./FlightInput";
import Flight from "./Flight";
import { connect } from "react-redux";
import { flightsLoadingStateSelector } from "../flight/flight.selectors";

const FlightApp = ({ isLoading }) => {
  const flightDescription = isLoading ? (
    <div className="loader"></div>
  ) : (
    <>
      <FlightInput />
      <Flight />
    </>
  );
  return flightDescription;
};

const mapState = (state) => {
  return {
    isLoading: flightsLoadingStateSelector(state),
  };
};

export default connect(mapState)(FlightApp);
