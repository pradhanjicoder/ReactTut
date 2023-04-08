import React from "react";

function GetDateFunc() {
  const DateD = new Date();
  const currentDate = DateD.getDate();
  const currentYear = DateD.getFullYear();
  const currentMonth = DateD.getMonth();

  const datereturn = (
    <p>{`${currentDate} / ${currentMonth + 1} / ${currentYear}`}</p>
  );
  return datereturn;
}

export default GetDateFunc;
