import { saveQuestion } from "../utils/apiService";
import { addQuestionToUser } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export const addAnswerToQuestion = (authedUser, questionId, answer) => {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    questionId,
    answer
  };
};

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  };
};

export const handleSaveQuestion = (
  optionOneText,
  optionTwoText,
  author
) => async dispatch => {
  const question = await saveQuestion({ optionOneText, optionTwoText, author });
  dispatch(addQuestion(question));
  dispatch(addQuestionToUser(question));
};
