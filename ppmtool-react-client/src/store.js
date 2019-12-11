import {createStore, applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers";


//set the initial state
//set the middleware
//define the store
//export the store
//configure the store to work on chrome and other browsers , pass on the tools and the state as well as the middleware


const initialState = {}
const middleware = [thunk]

let store ;

if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
        rootReducer,
        initialState, 
        compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        )
    );
} else {
    store = createStore(
        rootReducer,
        initialState, 
        compose(applyMiddleware(...middleware))
    );
}


export default store;