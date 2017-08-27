import { combineReducers } from "redux";
import trending from "./trending.js";
import random from "./random.js";

export default combineReducers({ trending, random });
