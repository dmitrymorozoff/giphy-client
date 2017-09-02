import "./style/main.css";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
