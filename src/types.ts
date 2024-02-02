import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';

export type ReduxState = {
  isFetching: boolean,
  imageUrl: string,
  errorMessage: string,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
