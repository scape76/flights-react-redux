import React from "react";
import { Provider } from "react-redux";
import Flight from "./components/Flight";
import FlightInput from "./components/FlightInput";
import store from "./storage";

const App = () => {
  return (
    <Provider store={store}>
      <FlightInput />
      <Flight />
    </Provider>
  );
};

export default App;
