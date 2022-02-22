import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import { Provider } from "react-redux";

import configureStore from "../store/storeConfiguration";
const store = configureStore();

import Navbar from "../components/Navbar";

import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRoute = (props) => {
    return <Provider store={store}>
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
}

export default AppRoute;