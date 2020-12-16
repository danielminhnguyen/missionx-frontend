import Axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "constants/loginConstants";
import history from "history.js";

export const signin = (email, password, role) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password, role },
  });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password, role });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    if (role === "teacher") {
      history.push("/dashboard");
    } else {
      history.push("/projects");
    }
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

export const signout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_SIGNOUT });
  history.push("/");
};

export const register = (firstname, lastname, email, password, role) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { firstname, lastname, email, password, role },
  });
  try {
    const { data } = await Axios.post("api/users/signin", { email, password, role });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};
