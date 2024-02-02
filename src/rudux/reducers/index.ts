import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const initialState = {
  isFetching: false,
  imageUrl: '',
  errorMessage: '',
};

type ActionType = {
  payload: string,
  type: string,
}

function dogReducers(state = initialState, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        imageUrl: '',
        errorMessage: '',
      };
    case REQUEST_SUCCESSFUL:
      console.log(action);
      return {
        ...state,
        isFetching: false,
        imageUrl: action.payload,
        errorMessage: '',
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        imageUrl: '',
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default dogReducers;
