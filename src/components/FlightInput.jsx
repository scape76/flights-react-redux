import React, { useState } from "react";
import { connect } from "react-redux/es/exports";
import * as flightActions from "../flight/flight.actions";

const FlightInput = ({ getFlightsList, showError }) => {
  const [value, handleChange] = useState("");
  console.log(value);
  return (
    <div className="input-section">
      <input
        className="city-input"
        type="text"
        placeholder="Fill in the city name"
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
      <button
        className="city-btn"
        onClick={() => {
          if (value === "") {
            showError();
          } else getFlightsList(value);
        }}
      >
        <i className="fa fa-check" aria-hidden="true"></i>
      </button>
    </div>
  );
};

const mapDispatch = {
  getFlightsList: flightActions.getFlights,
  showError: flightActions.showError,
};

export default connect(null, mapDispatch)(FlightInput);
