import { 
    createStore, 
    applyMiddleware, 
    compose 
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from 'app_reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        logger
    )
);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
}