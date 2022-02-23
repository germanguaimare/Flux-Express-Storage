import {items} from "./items"
import { activeUser } from "./activeUser"

import { combineReducers } from "redux"

const allReducers = combineReducers({

    items: items,
    activeUser: activeUser

})

export default allReducers