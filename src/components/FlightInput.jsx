import React, { useState } from "react";
import { connect } from "react-redux/es/exports";
import * as flightActions from "../flight/flight.actions";

const FlightInput = ({ getFlightsList, showError }) => {
  const [value, setValue] = useState("");

  return (
    <div className="input-section">
      <div className="input-continer">
        <input
          className="city-input"
          type="text"
          placeholder="Fill in the city name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="city-btn"
          onClick={() => {
            if (value) {
              setValue(" ");
              getFlightsList(value);
            }
          }}
        >
          <i className="fa fa-check" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

const mapDispatch = {
  getFlightsList: flightActions.getFlights,
  showError: flightActions.showError,
};

export default connect(null, mapDispatch)(FlightInput);
