import { createStore, combineReducers } from "redux";
import Actions from "../redux/Reducer/Actions";

const rootReducer = combineReducers({
    Actions,
})
const store = createStore(rootReducer)

export default store