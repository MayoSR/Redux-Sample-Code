const initialState = {
  number: 0,
};

// Use the initialState as a default value
export default function rootReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "ADD_NUMBER":
      state = { ...state, number: state.number + 1 };
      return state
    case "SUB_NUMBER":
      state = { ...state, number: state.number - 1 };
      return
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
