import React, { useState } from "react";
import "./Landingpage.css"

const Landingpage = () => {
    const [username,setUsername] = useState("")
    const userNameHandler = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value)
    }

    const setNameHandler = () => {
      localStorage.setItem("username" , username);
      window.location.reload()
    }

  return (
    <>
      <div className="landing-page-container">
        <h1 className="landing-page-heading">Hello, What's your name?</h1>
        <input type="text" className="landing-page-input" value={username} onChange={userNameHandler}/>
        <button className="landing-page-btn" onClick={setNameHandler}>Continue</button>
      </div>
    </>
  );
};

export { Landingpage };
