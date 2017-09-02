import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getActors } from "../../actions/";
class Actors extends React.Component {
    componentDidMount() {
        this.props.getActors();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Actors</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    actors: state.actors
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getActors }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
