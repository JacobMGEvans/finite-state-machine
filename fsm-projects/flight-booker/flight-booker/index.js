import React from "react";
import { useMachine } from "@xstate/react";
import { temperatureMachine } from "../machines/temperature-machine";

const sStyle = { fontSize: 20 };
export default function FlightBooker() {
  const [state, send] = useMachine(temperatureMachine);

  return (
    <>
      <input
        type="number"
        value={state.context.F}
        style={sStyle}
        onChange={e => send(`FAHRENHEIT`, { value: e.target.value })}
      />
      <span>˚F</span>
      <br />
      <input
        type="number"
        value={state.context.C}
        style={sStyle}
        onChange={e => send(`CELSIUS`, { value: e.target.value })}
      />
      <span>˚C</span>
    </>
  );
}
