import { combineReducers } from "redux";
import topReducer from "./top";
import popularReducer from "./popular";
import movieReducer from "./movie";

export default combineReducers({ topReducer, popularReducer, movieReducer });
