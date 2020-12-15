import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userRegisterReducer, userSigninReducer } from "reducers/userReducers";
import { teacherHelpReqReducer, teacherReqProfileReducer } from "reducers/teacherReducers";
import { projectBuilderReducers, projectListReducers } from "reducers/projectReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  userRegister: {},
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  teacherReqProfile: teacherReqProfileReducer,
  teacherHelpReq: teacherHelpReqReducer,
  projectList: projectListReducers,
  projectBuilder: projectBuilderReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
