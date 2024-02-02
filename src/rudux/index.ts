import { applyMiddleware, legacy_createStore as createStore } from "redux";
import dogReducers from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(dogReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
