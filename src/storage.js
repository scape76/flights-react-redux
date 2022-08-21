import {
  configureStore,
  getDefaultMiddleware,
  Reducer,
} from "@reduxjs/toolkit";
import flightReducer from "./flight/flight.reducer";

const reducer = {
  flights: flightReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
