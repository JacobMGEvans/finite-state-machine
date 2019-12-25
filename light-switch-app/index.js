import React from "react";
import reactDOM from "react-dom";
import { LightSwitch } from "./components/LightSwitch/LightSwitch";
import { StarrySky } from "./components/StarrySky/StarrySky";

const App = () => {
  return (
    <>
      <StarrySky />
      <LightSwitch />
    </>
  );
};

reactDOM.render(<App />, document.getElementById(`root`));
