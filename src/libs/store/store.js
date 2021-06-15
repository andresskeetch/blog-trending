import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage';
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'blog',
  storage: storage,
  whitelist: ['home'] 
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  pReducer,
  applyMiddleware(sagaMiddleware, createLogger())
);

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
