import React from "react";
import { useMachine } from "@xstate/react";
import { counterMachine } from "../../machines/counter-machine";

export default function Counter() {
  const [current, send] = useMachine(counterMachine);

  return <div />;
}
