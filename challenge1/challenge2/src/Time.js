import React from "react";

function GetTime() {
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  let period = "AM";
  if (hour > 12) {
    period = "PM";
  }
  let Time = `${hour}:${min}:${sec} ${period}`;
  return Time;
}
export default GetTime;
