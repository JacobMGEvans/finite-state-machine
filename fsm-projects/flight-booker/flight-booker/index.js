import React from "react";
import { useMachine } from "@xstate/react";
import { flightBookingMachine } from "../machines/flight-booker-machine";

const sStyle = { fontSize: 20 };
export default function FlightBooker() {
  const [current, send] = useMachine(flightBookingMachine);

  const isSubmitable = flightBookingMachine.transition(current, `SUBMIT`)
    .changed;

  return (
    <>
      <form>
        <input
          type="string"
          placeholder="Trip Type"
          value={current.context.trip}
          style={sStyle}
          onChange={e => send(`SET_TRIP`, { value: e.target.value })}
        />
        <br />
        <input
          placeholder="Start Date"
          name="startDate"
          type="date"
          value={current.context.startDate}
          style={sStyle}
          disabled={current.context.trip !== `oneWay`}
          onChange={e => send(`startDate.UPDATE`, { value: e.target.value })}
        />
        <br />
        <input
          placeholder="Return Date"
          name="returnDate"
          type="date"
          value={current.context.startDate}
          disabled={current.context.trip === `oneWay`}
          onChange={e => send(`returnData.UPDATE`, e.target.value)}
        />
        <br />
        <button
          type="button"
          onClick={() => send(`SUBMIT`)}
          disabled={!isSubmitable}
          data-state={{ ...current.toStrings() }}
        >
          {current.matches(`editing`) && `Submit`}
          {current.matches(`submitted`) && `Success!`}
        </button>
      </form>
    </>
  );
}
