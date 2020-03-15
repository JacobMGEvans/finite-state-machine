import React from "react";
import { useMachine } from "@xstate/react";
import { flightBookingMachine } from "../machines/flight-booker-machine";

const sStyle = { fontSize: 20 };
export default function FlightBooker() {
  const [state, send] = useMachine(flightBookingMachine);

  return (
    <>
      <input
        type="string"
        placeholder="Trip Type"
        value={state.context.trip}
        style={sStyle}
        onChange={e => send(`SET_TRIP`, { value: e.target.value })}
      />
      <br />
      <input
        type="date"
        placeholder="Start Date"
        value={state.context.startDate}
        style={sStyle}
        onChange={e => send(`startDate.UPDATE`, { value: e.target.value })}
      />
      <br />
      <input
        type="date"
        placeholder="Return Date"
        value={state.context.returnDate}
        style={sStyle}
        onChange={e => send(`returnDate.UPDATE`, { value: e.target.value })}
      />
      <br />
      <button
        label="submit-trip"
        type="submit"
        placeholder=""
        style={sStyle}
        onClick={() => send(`SUBMIT`)}
      />
    </>
  );
}
