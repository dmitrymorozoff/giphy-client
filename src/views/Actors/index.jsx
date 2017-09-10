import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchActorsList } from "./actions.js";
import ActorsList from "../../components/ActorsList";

class Actors extends React.Component {
    componentDidMount() {
        this.props.fetchActorsList();
    }
    renderActorsList() {
        if (this.props.actors.data !== null) {
            return <ActorsList data={this.props.actors} />;
        }
    }
    render() {
        return <div>{this.renderActorsList()}</div>;
    }
}

const mapStateToProps = state => ({
    actors: state.actorsReducer
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchActorsList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
