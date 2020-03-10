import React from "react";
import { useMachine } from "@xstate/react";
import { temperatureMachine } from "../../machines/temperature-machine";

const sStyle = { fontSize: 20 };
export default function Temperature() {
  const [current, send] = useMachine(temperatureMachine);

  // const handleChange = (action, eventPayload) => {
  //   eventPayload.persist();
  //   console.log(eventPayload);
  //   send(action, eventPayload.nativeElement.data);
  // };
  console.log(current, `Current`);
  return (
    <>
      <input onChange={e => send(`FAHRENHEIT`, e.nativeEvent.data)} />
      <br />
      <span style={sStyle}>Fahrenheit:</span>
      <br />
      <input onChange={e => send(`CELSIUS`, e.nativeEvent.data)} />
      <br />
      <span style={sStyle}>Celsius:</span>
    </>
  );
}
