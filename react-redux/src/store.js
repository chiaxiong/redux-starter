import { createStore, combineReducers } from "redux";
import homePage from "./container/HomePage/reducers";

const reducers = combineReducers({ homePage });

export default createStore(reducers);
