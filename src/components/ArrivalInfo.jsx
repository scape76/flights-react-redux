import React from "react";

const ArrivalInfo = ({ timezone, estimatedTime, scheduledTime, airport }) => {
  const city = timezone.split("/")[1];
  const estimated = new Date(estimatedTime).toLocaleDateString();
  const scheduled = new Date(scheduledTime).toLocaleDateString();

  return (
    <tr className="flight__table__item">
      <td>{city}</td>
      <td>{estimated}</td>
      <td>{scheduled}</td>
      <td>{airport}</td>
    </tr>
  );
};

export default ArrivalInfo;
