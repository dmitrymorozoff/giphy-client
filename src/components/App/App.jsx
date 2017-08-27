import React from "react";
import { connect } from "react-redux";
import { getTrending } from "../../actions/index.js";

class App extends React.Component {
    componentDidMount() {
        this.props.getTrending();
    }
    getGifs() {
        return (
            <ul>
                {this.props.trending.map((item, index) => {
                    console.log(item, index);
                    return (
                        <li key={index}>
                            {item.slug}
                        </li>
                    );
                })}
            </ul>
        );
    }
    render() {
        return (
            <div>
                {this.getGifs()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        trending: state.trending,
        random: state.random
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTrending: () => {
            dispatch(getTrending());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
