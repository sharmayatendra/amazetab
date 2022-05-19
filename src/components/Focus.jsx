import React, { useEffect, useState } from "react";

const Focus = () => {
  const [focus, setFocus] = useState("");
  const [userFocus, setUserFocus] = useState("");
  const [isFocusChecked, setIsFocusChecked] = useState(false);

  const focusHandler = (e) => {
    setFocus(e.target.value);
  };

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("userfocus", focus);
      setUserFocus(focus);
      setFocus("");
    }
  };

  const checkHandler = (e) => {
    setIsFocusChecked(e.target.checked);
    localStorage.setItem("checkFocus", e.target.checked);
  };

  const delteFocusHandler = () => {
    localStorage.removeItem("userfocus");
    localStorage.removeItem("checkFocus");
    setUserFocus("");
    setIsFocusChecked(false);
  };

  useEffect(() => {
    if (localStorage.getItem("userfocus")) {
      setUserFocus(localStorage.getItem("userfocus"));
      setIsFocusChecked(localStorage.getItem("checkFocus"));
    }
  }, []);

  return (
    <>
      <h2 className="landing-page-heading subheading">
        What is your main focus for today?
      </h2>
      {!userFocus && (
        <input
          type="text"
          className="landing-page-input focus-input"
          value={focus}
          placeholder="enter focus here"
          onChange={focusHandler}
          onKeyDown={keyHandler}
        />
      )}
      {userFocus && (
        <div className="user-focus-container">
          <label
            htmlFor="user-focus"
            className={
              isFocusChecked ? "user-focus-label checked" : "user-focus-label"
            }
          >
            <input type="checkbox" id="user-focus" onChange={checkHandler} />
            {userFocus}
          </label>
          <button className="icon-btn" onClick={delteFocusHandler}>
            <span className="material-symbols-outlined icon">delete_forever</span>
          </button>
        </div>
      )}
    </>
  );
};

export { Focus };
