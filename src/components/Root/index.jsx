import React from "react";
import { connect } from "react-redux";
import { getTopMovies } from "../../actions/index.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TopMovies from "../../views/TopMovies/index";
import Movies from "../../views/Movies/index";
import Navigation from "../Navigation/index";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import SideMenu from "../SideMenu/index";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
    componentDidMount() {
        this.props.getTopMovies();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <Navigation />
                    <div className="page">
                        <div className="menu">
                            <SideMenu />
                        </div>
                        <div className="content">
                            {" "}
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={props => (
                                        <TopMovies movies={this.props.top} />
                                    )}
                                />
                                <Route
                                    path="/home"
                                    render={props => (
                                        <TopMovies movies={this.props.top} />
                                    )}
                                />
                                <Route path="/movies" component={Movies} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        top: state.top,
        random: state.random
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTopMovies: () => {
            dispatch(getTopMovies());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
