const {
  TEACHER_STUDENT_PROFILES_REQUEST,
  TEACHER_STUDENT_PROFILES_SUCCESS,
  TEACHER_STUDENT_PROFILES_FAIL,
  TEACHER_HELPREQ_REQUEST,
  TEACHER_HELPREQ_SUCCESS,
  TEACHER_HELPREQ_FAIL,
} = require("constants/teacherConstants");

export const teacherReqProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_STUDENT_PROFILES_REQUEST:
      return { loading: true };
    case TEACHER_STUDENT_PROFILES_SUCCESS:
      return { loading: false, studentsInfo: action.payload };
    case TEACHER_STUDENT_PROFILES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherHelpReqReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_HELPREQ_REQUEST:
      return { loading: true };
    case TEACHER_HELPREQ_SUCCESS:
      return { loading: false, studentsInfo: action.payload };
    case TEACHER_HELPREQ_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
