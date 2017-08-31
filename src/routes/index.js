import React from "react";
import { Switch, Route } from "react-router-dom";
import Top from "../views/Top/index";
import Popular from "../views/Popular/index";
import MovieInfo from "../views/MovieInfo/index";

export default (
    <Switch>
        <Route path="/" exact component={Top} />
        <Route path="/top" component={Top} />
        <Route path="/popular" exact component={Popular} />
        <Route path="/popular/:id" component={MovieInfo} />
    </Switch>
);
