import Cookies from "js-cookie";

export const userLogin = (username, password) => {
  let user = {};
  if (username === "Ram" && password === "1234") {
    user = Cookies.set("user", true);
    user = true;
  } else {
    Cookies.set("user", false);
    user = false;
    alert("please check username/password");
  }
  return {
    type: "USER_LOGIN",
    payload: user,
  };
};

export const userLogout = () => {
  return {
    type: "USER_LOGOUT",
    payload: false,
  };
};
