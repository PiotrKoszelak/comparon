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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
        typography: {
          fontFamily: [
            "Lato",
            'Roboto',
          ].join(','),
        },
      });

function App ()  {
        return(
                <Provider store={store}>
                        <ThemeProvider theme={theme}>
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
                        </ThemeProvider>
                </Provider>
        )
};

export default App;
