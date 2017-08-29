import "./style/main.css";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
