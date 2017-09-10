import React from "react";
import { connect } from "react-redux";
import { fetchPopularMovies } from "./actions.js";
import Progress from "../../components/Progress/index";
import MoviesList from "../../components/MoviesList/index";
import { bindActionCreators } from "redux";

const styles = {};

class Popular extends React.Component {
    componentWillMount() {
        this.props.fetchPopularMovies();
    }
    renderCards() {
        if (this.props.popular.data === null) {
            return <Progress />;
        } else {
            return <MoviesList data={this.props.popular} />;
        }
    }
    render() {
        return <div>{this.renderCards()}</div>;
    }
}

const mapStateToProps = state => {
    return {
        popular: state.popularReducer
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchPopularMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
