import React from "react";
import { render } from "react-dom";
import FlightBooker from "./flight-booker/index";

const App = () => {
  return (
    <>
      <FlightBooker />
    </>
  );
};

render(<App />, document.getElementById(`root`));
