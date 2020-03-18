import React from "react";
import { useMachine } from "@xstate/react";
import { flightBookingMachine } from "../machines/flight-booker-machine";

const sStyle = { fontSize: 20 };
export default function FlightBooker() {
  const [current, send] = useMachine(flightBookingMachine);

  const isSubmitable = flightBookingMachine.transition(current, `SUBMIT`)
    .changed;

  return (
    <section>
      <form onSubmit={() => console.log({ ...current.context }, `onSubmit`)}>
        <select
          type="string"
          placeholder="Trip Type"
          value={current.context.trip}
          style={sStyle}
          onChange={e => send(`SET_TRIP`, { value: e.target.value })}
        >
          <option value="oneWay">One Way Trip</option>
          <option value="roundTrip">Round Trip</option>
        </select>
        <br />
        <span>Start Date</span>
        <br />
        <input
          placeholder="Start Date"
          name="startDate"
          type="date"
          style={sStyle}
          value={current.context.startDate}
          onChange={e => send(`startDate.UPDATE`, { value: e.target.value })}
        />
        <br />
        <span>Return Date</span>
        <br />
        <input
          placeholder="Return Date"
          name="returnDate"
          type="date"
          style={sStyle}
          value={current.context.returnDate}
          disabled={current.context.trip === `oneWay`}
          onChange={e => send(`returnDate.UPDATE`, { value: e.target.value })}
        />
        <br />
        <button
          type="submit"
          onClick={() => send(`SUBMIT`)}
          disabled={!isSubmitable}
        >
          {current.matches(`editing`) && `Submit`}
          {current.matches(`submitted`) && `Success!`}
        </button>
      </form>
    </section>
  );
}
