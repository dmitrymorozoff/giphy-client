import React from "react";
import { connect } from "react-redux";
import { getPopularMovies } from "../../actions/index";
import Progress from "../../components/Progress/index";
import Movies from "../../components/Movies/index";

const styles = {};

class Popular extends React.Component {
    componentWillMount() {
        this.props.getPopularMovies();
    }
    renderCards() {
        if (this.props.popular.data === null) {
            return <Progress />;
        } else {
            return <Movies data={this.props.popular} />;
        }
    }
    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popular
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPopularMovies: () => {
            dispatch(getPopularMovies());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
