const baseUrl =
  "http://api.aviationstack.com/v1/flights?access_key=c03923164add018b20a02d8b3a3f4089";

export const fetchFlights = () => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("couldn't fetch data");
  });
};
