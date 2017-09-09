import { combineReducers } from "redux";
import topReducer from "./top";
import popularReducer from "./popular";
import movieReducer from "./movie";
import homeReducer from "./home";

export default combineReducers({
    topReducer,
    popularReducer,
    movieReducer,
    homeReducer
});
