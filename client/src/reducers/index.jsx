import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import start_live_broadcast from "./reducer_start_live_broadcast"

const rootReducer = combineReducers({
  start_live_broadcast: start_live_broadcast
})

export default rootReducer
