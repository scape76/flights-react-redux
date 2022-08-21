import React from "react";
import ArrivalInfo from "./ArrivalInfo";
import { connect } from "react-redux/es/exports";
import { sortedFlightsListSelector } from "../flight/flight.selectors";

const FlightArrival = ({ sortedFlightsList }) => {
  return (
    <div className="arrival">
      <h1 className="arrival__title">Arrival</h1>
      <table className="flight__table" cellSpacing={0}>
        <thead className="flight__table__header">
          <tr>
            <th>to</th>
            <th>estimated</th>
            <th>scheduled</th>
            <th>airline</th>
          </tr>
        </thead>
        <tbody>
          {!!sortedFlightsList?.length &&
            sortedFlightsList.map((flight) => (
              <ArrivalInfo
                timezone={flight.arrival.timezone}
                estimatedTime={flight.arrival.estimated}
                scheduledTime={flight.arrival.scheduled}
                airport={flight.arrival.airport}
                key={flight.flight.number}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    sortedFlightsList: sortedFlightsListSelector(state),
  };
};

export default connect(mapState)(FlightArrival);
