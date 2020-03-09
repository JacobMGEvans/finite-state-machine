import React from "react";
import reactDOM from "react-dom";
import { LightSwitch } from "./components/LightSwitch/LightSwitch";
import { toggleService } from "./machines/light-switch-machine";

const App = () => {
  return (
    <div>
      <LightSwitch />
    </div>
  );
};

reactDOM.render(<App />, document.getElementById(`root`));
