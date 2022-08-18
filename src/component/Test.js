import React, { useState, useEffect, useRef } from "react";
import classes from "./Messages.module.css";
import reactStringReplace from "react-string-replace";
import { useSelector } from "react-redux";

const Messages = (props) => {
  const messages = useSelector((state) => state.chatbot.messages);
  const [activeBot, setBot] = useState([]);

  const isFirstRun = useRef(true);

  useEffect(() => {
    console.log(messages);
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else if (messages[1].speak === "bot") {
      setBot(messages[1].text);
      console.log(activeBot);
    }
  }, [messages, activeBot]);

  let dsptext;

  const displayMessage = (index, message) => {
    dsptext = message.text;

    function removespan(entity) {
      console.log(dsptext);

      for (let i = 0; i < dsptext.length; i++) {
        if (
          dsptext[i].type === "span" &&
          dsptext[i].props.children[0] === entity.match
        ) {
          dsptext[i] = entity.match;
        }
      }
      console.log(dsptext);
    }

    if (message.entities) {
      message.entities.forEach((entity) => {
        if (message.text.toLowerCase().includes(entity.value.toLowerCase())) {
          dsptext = reactStringReplace(dsptext, entity.value, (match) => (
            <span className={classes.rpltext}>
              {match}
              <span className={classes.entitytype}>
                {entity.type}
                <button
                  className={classes.entityButton}
                  onClick={() => removespan({ match })}
                >
                  x
                </button>
              </span>
            </span>
          ));
          console.log(dsptext);
        }
      });
    }

    return (
      <div key={index} className={classes.messages__bot}>
        <p className={classes["messages__text-bot"]}>{dsptext}</p>
      </div>
    );
  };

  return (
    <div className={classes.messages}>
      {messages.map((message, index) => {
        if (message.speak === "user") {
          console.log(index);

          return (
            <div key={index} className={classes.messages__user}>
              <p className={classes["messages__text-user"]}>{message.text}</p>
            </div>
          );
        } else if (message.speak === "bot") {
          return displayMessage(index, message);
        } else return "";
      })}
    </div>
  );
};

export default Messages;
