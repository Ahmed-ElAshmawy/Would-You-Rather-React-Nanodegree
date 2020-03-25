import { getInitialData } from "../utils/apiService";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";

export const handleInitialData = () => async dispatch => {
  const { users, questions } = await getInitialData();
  dispatch(receiveQuestions(questions));
  dispatch(receiveUsers(users));
};
