import { combineReducers } from 'redux'

import commentReducer from "./commentReducers";
import addressReducer from "./addressReducer";

export default combineReducers({
    commentReducer,
    addressReducer
  })