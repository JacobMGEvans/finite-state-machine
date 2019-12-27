import React from "react";
import reactDOM from "react-dom";
import { LightSwitch } from "./components/LightSwitch/LightSwitch";
import { StarrySky } from "./components/StarrySky/StarrySky";
import { toggleService } from "../machines/light-switch-machine";

const App = () => {
  return (
    <>
      {toggleService.onTransition(state => state.value) === `active` && (
        <StarrySky />
      )}
      <LightSwitch />
    </>
  );
};

reactDOM.render(<App />, document.getElementById(`root`));
