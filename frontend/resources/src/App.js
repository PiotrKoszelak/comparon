import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Offers from "./container/Offers";
import About from "./container/About";
import Contact from "./container/Contact";
import TermsOfUse from "./container/TermsOfUse";
import PolicyPrivacy from "./container/PolicyPrivacy";
import Compare from "./container/Compare";

function App ()  {
        return(
                <Provider store={store}>
                        <BrowserRouter>
                                <Switch>
                                        <Route exact path='/' component={Offers}/>
                                        <Route exact path='/about' component={About}/>
                                        <Route exact path='/contact' component={Contact}/>
                                        <Route exact path='/termsofuse' component={TermsOfUse}/>
                                        <Route exact path='/policyprivacy' component={PolicyPrivacy}/>
                                        <Route exact path='/offers/compare' component={Compare}/>
                                        {/*<Route exact path='/offers/selectedoffer' component={PolicyPrivacy}/>*/}
                                </Switch>
                        </BrowserRouter>
                </Provider>
        )
};

export default App;
