import { combineReducers } from "redux";
import auth from "./auth";
import types from '../types';
import Appsetting from "./Appsetting";
const appReducer = combineReducers({
    auth,
    Appsetting
   
});
const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}
export default rootReducer;