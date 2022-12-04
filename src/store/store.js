import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { autReducer } from "../reducers/authReducer";
import { testReducer } from "../reducers/testReducer";
import { uiReducer } from "../reducers/uiRedicer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: autReducer,
    ui: uiReducer,
    rtest: testReducer
});
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);