import { combineReducers } from "redux";
import ModalReducer from "./ModalReducer";
import UserReducer from "./UserReducer"

const reducers = combineReducers({
    ModalReducer: ModalReducer,
    UserReducer: UserReducer,
})

export default reducers