export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return {
        name: "",
        password: "",
      };
    default:
      return state;
  }
};
