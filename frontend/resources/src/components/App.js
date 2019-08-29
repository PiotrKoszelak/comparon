import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Offers from "./container/Offers";


const App = () => (
        <Provider store={store}>
                 <BrowserRouter>
                        <Switch>
                                <Route exact path='/offers' component={Offers}/>
                                
                        </Switch>
                </BrowserRouter>
        </Provider>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;