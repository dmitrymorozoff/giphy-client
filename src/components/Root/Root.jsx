import React from "react";
import { connect } from "react-redux";
import { getTopMovies } from "../../actions/index.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TopMovies from "../../views/TopMovies/TopMovies";

class App extends React.Component {
    componentDidMount() {
        this.props.getTopMovies();
    }

    render() {
        return (
            <MuiThemeProvider>
                <TopMovies movies={this.props.top} />
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
