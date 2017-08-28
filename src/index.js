import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root/Root.jsx";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
