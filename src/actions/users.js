import { saveQuestionAnswer } from "../utils/apiService";
import { addAnswerToQuestion } from "../actions/questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const addAnswerToUser = (authedUser, questionId, answer) => {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    questionId,
    answer
  };
};

export const handleSaveQuestionAnswer = (
  authedUser,
  questionId,
  answer
) => async dispatch => {
  dispatch(addAnswerToUser(authedUser, questionId, answer));
  dispatch(addAnswerToQuestion(authedUser, questionId, answer));
  try {
    return saveQuestionAnswer(authedUser, questionId, answer);
  } catch (e) {
    console.warn("Error in handleSaveQuestionAnswer:", e);
  }
};

export const addQuestionToUser = ({ id, author }) => {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
};
