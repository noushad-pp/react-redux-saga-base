import AppContainer from "./pages/AppContainer";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./data/redux/store";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "@atlaskit/css-reset";

export const history = createBrowserHistory();
const { store, persistor } = configureStore(history);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
};

render(AppContainer);

if (module.hot && process.env.NODE_ENV !== "production") {
  module.hot.accept("./pages/AppContainer", () => {
    render(AppContainer);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
