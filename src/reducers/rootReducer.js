import { combineReducers } from "redux";
import top from "./top";
import popular from "./popular";
import info from "./info";

export default combineReducers({ top, popular, info });
