import { createMachine, assign } from "xstate";

export const counterMachine = createMachine({
  initial: `active`,
  context: { count: 0 },
  states: {
    active: {
      on: {
        INCREMENT: {
          actions: assign({ count: ctx => ctx.count + 1 })
        },
        DECREMENT: {
          actions: assign({ count: ctx => ctx.count - 1 })
        }
      }
    }
  }
});
