import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
import { routerMiddleware } from "connected-react-router";

const persistConfig = {
  key: "root",
  storage
};

const configureStore = (history, initialState = {}) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  );

  const reducer = rootReducer(history);
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  if (module.hot && process.env.NODE_ENV !== "production") {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return { store, persistor };
};

export default configureStore;
