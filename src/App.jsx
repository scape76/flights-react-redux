import React from "react";
import { Provider } from "react-redux";
import FlightApp from "./components/FlightApp";
import store from "./storage";

const App = () => {
  return (
    <Provider store={store}>
      <FlightApp />
    </Provider>
  );
};

export default App;
