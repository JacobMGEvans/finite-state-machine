import React from "react";
import reactDOM from "react-dom";
import { LightSwitch } from "./components/LightSwitch/LightSwitch";

const App = () => <LightSwitch />;

reactDOM.render(<App />, document.getElementById(`root`));
