import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

const MovieInfo = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
);

export default MovieInfo;
