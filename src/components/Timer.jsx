import React, { useEffect, useState } from "react";

const Timer = () => {
  const date = new Date();
  const [time, setTime] = useState({
    hourtime: date.getHours(),
    minutetime: date.getMinutes(),
  });

  useEffect(() => {
    let interval = setInterval(() => {
      let date = new Date();
      let time = { hourtime: date.getHours(), minutetime: date.getMinutes() };
      setTime(time);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const greetMsg = `Good ${
    (time.hourtime < 5 && "night") ||
    (time.hourtime < 12 && "morning") ||
    (time.hourtime < 17 && "evening") ||
    (time.hourtime < 22 && "night") ||
    "night"
  } `;

  return (
    <>
      <h1 className="landing-page-heading">
        {time.hourtime} :  {(time.minutetime < 10) && ("0" + time.minutetime || (time.minutetime))}
        
      </h1>
      <h1 className="landing-page-heading">
        {greetMsg}, {localStorage.getItem("username")}.
      </h1>
    </>
  );
};

export { Timer };