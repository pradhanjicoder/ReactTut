import React from "react";
import ReactDOM from "react-dom";
import GetDateFunc from "./Date.js";
import GetTime from "./Time.js";

const name = "Balram";

ReactDOM.render(
  <>
    <h1>{`my name is ${name}`}</h1>
    <GetDateFunc />
    <p>
      Current Time is <GetTime />
    </p>
  </>,
  document.getElementById("root")
);
