import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";

import App from "./App";
import history from "./history";
import LoginPembeli from "./View/Login/LoginPembeli"

export default class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route path="/LoginPembeli" exact component={LoginPembeli}/>
                </Switch>
            </Router>
        )
    }
}