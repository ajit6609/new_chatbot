import React, { useState } from "react";
import classes from "./Card.module.css";
import { useDispatch } from "react-redux";
import * as chatbotActions from "../../store/actions/chatbotActions";
import Entity from "./Entity";

const Card = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleUserQuery = () => {
    if (query === "") {
      alert("please enter a valid query");
      return;
    }
    const data = {
      speak: "user",
      text: query,
    };

    dispatch(chatbotActions.textQueryAction(data));
  };

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
    console.log("");
  };

  return (
    <div className={classes.card}>
      <div className={classes.head}>
        <h4 className={classes.title}>New Chatbot</h4>
      </div>
      <div className={classes.main}>
        <div className={classes.input}>
          <textarea
            placeholder="User Input....."
            className={classes.inputArea}
            rows="10"
            cols="50"
            value={query}
            onChange={queryChangeHandler}
          />
          <button className={classes.inputButton} onClick={handleUserQuery}>
            Send
          </button>
        </div>
        <div className={classes.output}>
          <Entity />
        </div>
      </div>
    </div>
  );
};

export default Card;
