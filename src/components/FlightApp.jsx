import React from "react";
import FlightInput from "./FlightInput";
import Flight from "./Flight";
import { connect } from "react-redux";
import { flightsLoadingStateSelector } from "../flight/flight.selectors";

const FlightApp = ({ isLoading }) => {
  return (
    <>
      <FlightInput />
      {isLoading ? <div className="loader"></div> : <Flight />}
    </>
  );
};

const mapState = (state) => {
  return {
    isLoading: flightsLoadingStateSelector(state),
  };
};

export default connect(mapState)(FlightApp);
