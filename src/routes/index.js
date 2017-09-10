import React from "react";
import { Switch, Route } from "react-router-dom";
import Top from "../views/Top/";
import Popular from "../views/Popular/";
import MovieInfo from "../views/MovieInfo/";
import Home from "../views/Home/";
import Actors from "../views/Actors/";

export default (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/top" component={Top} />
        <Route path="/popular" exact component={Popular} />
        <Route path="/popular/:id" component={MovieInfo} />
        <Route path="/actors" component={Actors} />
    </Switch>
);
