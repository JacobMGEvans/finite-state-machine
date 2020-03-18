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
      <form>
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
          disabled={current.context.trip !== `oneWay`}
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
          onChange={e => send(`returnData.UPDATE`, e.target.value)}
        />
        <br />
        <button
          type="button"
          onClick={() => send(`SUBMIT`)}
          disabled={!isSubmitable}
          data-state={current.toStrings().pop()}
        >
          {current.matches(`editing`) && `Submit`}
          {current.matches(`submitted`) && `Success!`}
        </button>
      </form>
    </section>
  );
}
