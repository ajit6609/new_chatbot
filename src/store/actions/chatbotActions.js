import Reply from "../../Reply.json";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const UPDATE_USER_MESSAGE = "UPDATE_USER_MESSAGE";

export const textQueryAction = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_MESSAGE, data: data });

    const res = Reply.res.filter((reply) => reply.user_msg === data.text);
    let meta = null;
    if (res[0].metadata.intent === "order-pizza") {
      meta = res[0].metadata.entities;
    }

    const response = {
      speak: "bot",
      text: res[0].reply,
      entities: meta,
    };

    return dispatch({ type: UPDATE_MESSAGE, data: response });
  };
};
