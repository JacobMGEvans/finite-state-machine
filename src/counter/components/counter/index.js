import React from "react";
import { useMachine } from "@xstate/react";
import { counterMachine } from "../../machines/counter-machine";

export default function Counter() {
  const [current, send] = useMachine(counterMachine);

  console.log(current, `Current`);
  return (
    <>
      <button
        onClick={() => send(`INCREMENT`)}
        style={{ width: 100, height: 60 }}
      >
        Increase
      </button>
      <button
        onClick={() => send(`DECREMENT`)}
        style={{ width: 100, height: 60 }}
      >
        DECREASE
      </button>
      <span style={{ fontSize: 100 }}>{current.context.count}</span>
    </>
  );
}
