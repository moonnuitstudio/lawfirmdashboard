import { combineReducers } from "redux";
import mattersReducer from "./mattersReducer";
import loadScreenReducer from "./loadScreenReducer";
import docketwiseReducer from "./docketwiseReducer";

export default combineReducers({
    matters: mattersReducer,
    loadscreen: loadScreenReducer,
    docketwise: docketwiseReducer
})