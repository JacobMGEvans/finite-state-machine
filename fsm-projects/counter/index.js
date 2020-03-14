import React from "react";
import { render } from "react-dom";
import Counter from "./components/counter";

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

render(<App />, document.getElementById(`root`));
