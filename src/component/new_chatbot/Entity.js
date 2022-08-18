import React, { useEffect, useState } from "react";
import classes from "./Entity.module.css";
import { useSelector } from "react-redux";

const Entity = () => {
  const messages = useSelector((state) => state.chatbot.messages);

  const [enObject, updateEn] = useState([]);

  console.log(messages);

  useEffect(() => {
    if (messages[0] && messages[0].entities !== null) {
      updateEn(messages[0].entities);
      console.log(enObject);
    }
  }, [messages, enObject]);

  return (
    <div className={classes.entityCard}>
      {enObject.map((eachEntity) => {
        console.log(eachEntity);
        return (
          <div className={classes.entity}>
            <p className={classes.entityValue}>{eachEntity.value}</p>
            <p className={classes.entityType}>{eachEntity.type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Entity;
