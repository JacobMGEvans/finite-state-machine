import React from "react";
import { useMachine } from "@xstate/react";
import { temperatureMachine } from "../../machines/temperature-machine";

const sStyle = { fontSize: 20 };
export default function Temperature() {
  const [current, send] = useMachine(temperatureMachine);

  console.log(current, `Current`);
  return (
    <>
      <input onChange={e => send(`FARENHEIT`, e)} />
      <br />
      <span style={sStyle}>Fahrenheit:</span>
      <br />
      <input onChange={e => send(`CELSIUS`, e)} />
      <br />
      <span style={sStyle}>Celsius:</span>
    </>
  );
}
