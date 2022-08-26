import { combineReducers } from "redux";
import {todoReducer} from './reducers/TodoReducers'

export const RootReducer = combineReducers({
    todos:todoReducer
})

export default RootReducer;