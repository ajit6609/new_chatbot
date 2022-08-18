import { UPDATE_MESSAGE, UPDATE_USER_MESSAGE } from "../actions/chatbotActions";

const initialState = {
  messages: [],
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      let message = action.data;

      return {
        // ...state,
        // messages: [...state.messages, message],
        messages: [message],
      };

    case UPDATE_USER_MESSAGE:
      let messageUser = action.data;

      return {
        ...state,
        messages: [...state.messages, messageUser],
        // messages: [messageUser],
      };

    default:
      return state;
  }
};

export default store;
