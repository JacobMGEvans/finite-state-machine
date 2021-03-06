import { Machine, assign } from "xstate";

export const temperatureMachine = Machine({
  initial: `active`,
  context: { C: ``, F: `` },
  states: {
    active: {
      on: {
        CELSIUS: {
          actions: assign({
            C: (_, event) => event.value,
            F: (_, event) => (event.value ? +event.value * (9 / 5) + 32 : ``)
          })
        },
        FAHRENHEIT: {
          actions: assign({
            C: (_, event) => (event.value ? (+event.value - 32) * (5 / 9) : ``),
            F: (_, event) => event.value
          })
        }
      }
    }
  }
});
