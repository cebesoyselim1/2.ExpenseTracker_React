import { createStore, combineReducers } from "redux";

import ExpenseReducer from "../reducers/ExpenseReducer";
import AlertReducer from "../reducers/AlertReducer";
import UpdatingReducer from "../reducers/UpdatingReducer";

const storeConfiguraion = () => {
    const store = createStore(combineReducers({
        ExpenseReducer: ExpenseReducer,
        AlertReducer: AlertReducer,
        UpdatingReducer: UpdatingReducer
    }));

    return store;
}

export default storeConfiguraion;