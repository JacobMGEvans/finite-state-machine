import React from "react";
import { render } from "react-dom";
import Temperature from "./components/temperature";

const App = () => {
  return (
    <>
      <Temperature />
    </>
  );
};

render(<App />, document.getElementById(`root`));
