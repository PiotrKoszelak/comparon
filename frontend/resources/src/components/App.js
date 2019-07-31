import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import SelectContainer from "./container/SelectContainer";
import OffersContainer from "./container/OffersContainer";
import Header from "./container/Header";

const App = () => (
        <Provider store={store}>
                <Header />
                <SelectContainer />
                <OffersContainer />
        </Provider>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;