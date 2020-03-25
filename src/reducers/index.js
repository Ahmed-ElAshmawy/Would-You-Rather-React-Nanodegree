import authedUser from "../reducers/authedUser";
import questions from "../reducers/questions";
import users from "../reducers/users";

import { combineReducers } from "redux";

export default combineReducers({
  authedUser,
  questions,
  users
});
