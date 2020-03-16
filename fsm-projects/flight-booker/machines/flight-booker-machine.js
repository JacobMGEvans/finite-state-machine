import { Machine, assign } from "xstate";

export const flightBookingMachine = Machine({
  id: `flight`,
  initial: `editing`,
  context: {
    startDate: ``,
    returnDate: ``,
    trip: `oneWay` // or 'roundTrip'
  },
  states: {
    editing: {
      on: {
        "startDate.UPDATE": {
          actions: assign({
            startDate: (_, event) => event.value
          })
        },
        "returnDate.UPDATE": {
          actions: assign({
            returnDate: (_, event) => event.value
          }),
          cond: context => context.trip === `roundTrip`
        },
        SET_TRIP: {
          actions: assign({
            trip: (_, event) => event.value
          }),
          cond: (_, event) =>
            event.value === `oneWay` || event.value === `roundTrip`
        },
        SUBMIT: {
          target: `submitted`,
          cond: context => {
            if (context.trip === `oneWay`) {
              return !!context.startDate;
            }
            return (
              !!context.startDate &&
              !!context.returnDate &&
              context.returnDate > context.startDate
            );
          }
        }
      }
    }
  },
  submitted: {
    type: `final`
  }
});
