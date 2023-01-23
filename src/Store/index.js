import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { userReducer } from './auth/reducer';

const middleWare = [thunk];
if (process.env.NODE_ENV === "development") {
    middleWare.push(logger)
};

export const store = createStore(userReducer, applyMiddleware(thunk));

