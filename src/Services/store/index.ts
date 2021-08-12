

import rootSaga from './modules/rootSaga';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './modules/rootReducer';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistReducers = (rootReducer: any) => {
    const persistedReducers = persistReducer(
        {
            key: 'zion',
            storage,
            whitelist: ['auth', 'data'],
        },
        rootReducer
    );

    return persistedReducers;
};

const reducers = persistReducers(rootReducer);

const store = createStore(reducers, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };