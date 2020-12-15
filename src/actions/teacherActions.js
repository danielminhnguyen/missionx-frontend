import Axios from "axios";
import {
  TEACHER_HELPREQ_FAIL,
  TEACHER_HELPREQ_REQUEST,
  TEACHER_HELPREQ_SUCCESS,
  TEACHER_STUDENT_PROFILES_FAIL,
  TEACHER_STUDENT_PROFILES_REQUEST,
  TEACHER_STUDENT_PROFILES_SUCCESS,
} from "constants/teacherConstants";

export const teacherProfileReq = (teacherID) => async (dispatch) => {
  dispatch({ type: TEACHER_STUDENT_PROFILES_REQUEST });
  try {
    const { data } = await Axios.post("api/teachers/studentprofile", { teacherID });
    dispatch({ type: TEACHER_STUDENT_PROFILES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEACHER_STUDENT_PROFILES_FAIL, payload: error.message });
  }
};

export const teacherStudentsRequest = (teacherID) => async (dispatch) => {
  dispatch({ type: TEACHER_HELPREQ_REQUEST });
  try {
    const { data } = await Axios.post("api/teachers/helprequest", { teacherID });
    dispatch({ type: TEACHER_HELPREQ_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEACHER_HELPREQ_FAIL, payload: error.message });
  }
};
