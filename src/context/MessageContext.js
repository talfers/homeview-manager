import createDataContext from './createDataContext';

const messageReducer = (state, action) => {
  switch(action.type) {
    case 'send_message':
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
}

const sendMessage = (dispatch) => {
  return (user, message) => {
    dispatch({type: 'send_message', payload: {user, message}})
  }
}

export const { Context, Provider } = createDataContext(
  messageReducer,
  { sendMessage },
  { messages: [] }
)
