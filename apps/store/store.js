import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

// export const store = createStore(reducers, {}, applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;