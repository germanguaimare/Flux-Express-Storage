import items from "./items"
import { combineReducers } from "redux"

const allReducers = combineReducers({

    items: items

})

export default allReducers