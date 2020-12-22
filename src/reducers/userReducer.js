import Cookies from "js-cookie";
const iState = {
  login: Cookies.get("user"),
};

const userReducer = (state = iState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, login: action.payload };
    case "USER_LOGOUT":
      return { ...state, login: action.payload };
    default:
      return state;
  }
};

export default userReducer;
