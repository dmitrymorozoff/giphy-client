import React from "react";
import { connect } from "react-redux";
import Progress from "../../components/Progress/index";
import Movies from "../../components/Movies/index";
import SelectField from "material-ui/SelectField/";
import MenuItem from "material-ui/MenuItem/";
import { getTopMovies } from "../../actions";
import { bindActionCreators } from "redux";
const styles = {};

const items = [
    <MenuItem key={1} value={1} primaryText="Never" />,
    <MenuItem key={2} value={2} primaryText="Every Night" />,
    <MenuItem key={3} value={3} primaryText="Weeknights" />,
    <MenuItem key={4} value={4} primaryText="Weekends" />,
    <MenuItem key={5} value={5} primaryText="Weekly" />
];

class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: null };
    }
    componentWillMount() {
        this.props.getTopMovies();
    }
    renderCards() {
        if (this.props.top.data === null) {
            return <Progress />;
        } else {
            return <Movies data={this.props.top} />;
        }
    }
    handleChange = (event, index, value) => this.setState({ value });
    render() {
        return <div>{this.renderCards()}</div>;
    }
}

function mapStateToProps(state) {
    return {
        top: state.top
    };
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getTopMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Top);
