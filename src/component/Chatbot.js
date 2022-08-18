import React, { useState } from "react";
import classes from "./Chatbot.module.css";
import { MdSend, MdOutlineClose } from "react-icons/md";
import Messages from "./Messages";
import Test from "./Test";
import { useDispatch } from "react-redux";
import * as chatbotActions from "../store/actions/chatbotActions";

const Chatbot = () => {
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
    setQuery("");
  };

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={classes.chatbot}>
      <div className={classes.chatbot__header}>
        <h1 className={classes["chatbot__header--text"]}>Jarvis</h1>
        <button className={classes["chatbot__header--btn"]}>
          <MdOutlineClose size="2rem" />
        </button>
      </div>

      <div className={classes.chatbot__body}>
        <Messages />
      </div>
      <div className={classes.chatbot__footer}>
        <input
          className={classes["chatbot__footer--input"]}
          type="text"
          placeholder="Type here..."
          value={query}
          onChange={queryChangeHandler}
        />
        <button
          className={classes["chatbot__footer--btn"]}
          onClick={handleUserQuery}
        >
          <MdSend size="1.5rem" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
