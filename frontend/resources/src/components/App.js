import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import SelectContainer from "./container/SelectContainer";
import DataProviderContainer from "./container/DataProviderContainer";

const App = () => (
        <Provider store={store}>
                <SelectContainer />
                <DataProviderContainer />
        </Provider>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;