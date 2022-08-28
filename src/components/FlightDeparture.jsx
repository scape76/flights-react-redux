import React from "react";
import DepartureInfo from "./DepartureInfo";
import { connect } from "react-redux/es/exports";
import { sortedFlightsListSelector } from "../flight/flight.selectors";

const FlightDeparture = ({ sortedFlightsList }) => {
  // let newSortedFlightsList;
  // if (Boolean(sortedFlightsList) && sortedFlightsList?.length > 0) {
  //   newSortedFlightsList =
  // }
  return (
    <div className="departure">
      <h1 className="departure__title">Departure</h1>
      <table className="flight__table" cellSpacing={0}>
        <thead className="flight__table__header">
          <tr>
            <th>from</th>
            <th>estimated</th>
            <th>scheduled</th>
            <th>airline</th>
          </tr>
        </thead>
        <tbody>
          {!!sortedFlightsList?.length > 0 &&
            sortedFlightsList.map((flight, indx) => (
              <DepartureInfo
                timezone={flight.departure.timezone}
                estimatedTime={flight.departure.estimated}
                scheduledTime={flight.departure.scheduled}
                airport={flight.arrival.airport}
                key={`departure_${indx}`}
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

export default connect(mapState)(FlightDeparture);
