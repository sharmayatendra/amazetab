import React from "react";
import { Timer } from "../../components/Timer";
import { Weather } from "../../components/Weather";
import { Focus } from "../../components/Focus";
import { Quotes } from "../../components/Quotes";
import { Todo } from "../../components/Todo";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="main-home-container">
        <Weather />
      </div>
      <div className="landing-page-container">
        <Timer />

        <Focus />

        {/* <button className="landing-page-btn" onClick={setNameHandler}>Continue</button> */}
      </div>
      <div className="main-quote-container">
        <div className="quote-comp-container">
          <Quotes />
        </div>
        <div className="todo-comp-container">
          <Todo />
        </div>
      </div>
    </>
  );
};

export { Homepage };
