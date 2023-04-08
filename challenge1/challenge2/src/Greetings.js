import React from "react";
import { hour } from "./Time.js";

function Greeted() {
  let greetings = "Good Morning";
  if (hour < 12) {
    greetings = "Good Morning";
  }
  if (hour > 12 && hour < 18) {
    greetings = "Good AfterNoon";
  }
  if (hour > 18 && hour < 24) {
    greetings = "Good Evening";
  }
  return greetings;
}

export default Greeted;
