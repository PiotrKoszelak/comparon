import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Offers from "./container/Offers";
import About from "./container/About";

const App = () => (
  <Provider store={store}>
           <BrowserRouter>
                  <Switch>
                          <Route exact path='/' component={Offers}/>
                          <Route exact path='/about' component={About}/>
                  </Switch>
          </BrowserRouter>
  </Provider>
);

export default App;
