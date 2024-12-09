import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./Reducer";
import { thunk } from "redux-thunk";

export const Store = legacy_createStore(reducer, applyMiddleware(thunk));
