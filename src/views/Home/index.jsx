import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAllGenres } from "./actions.js";
import { Chip, Grid, ChipContact } from "react-mdl";
import { getRandomInt } from "../../utils";

const chipColors = [
    "#E3F2FD",
    "#BBDEFB",
    "#90CAF9",
    "#64B5F6",
    "#42A5F5",
    "#2196F3",
    "#1E88E5",
    "#1976D2",
    "#1565C0",
    "#0D47A1",
    "#82B1FF",
    "#448AFF",
    "#2979FF",
    "#2962FF"
];

const styles = {
    grid: {
        justifyContent: "center",
        width: "90%",
        margin: "0 auto"
    },
    cell: {
        display: "flex",
        justifyContent: "center"
    },
    chipList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    chip: {
        margin: "10px 5px",
        background: "#303e57",
        color: "#fff",
        cursor: "pointer"
    }
};

class Home extends React.Component {
    componentWillMount() {
        this.props.fetchAllGenres();
    }
    renderGenresList() {
        if (this.props.genres.data !== null) {
            return (
                <div style={styles.chipList}>
                    {this.props.genres.data.map((item, index) => {
                        const randomColor =
                            chipColors[getRandomInt(0, chipColors.length)];
                        return (
                            <Chip key={index} style={styles.chip}>
                                <ChipContact
                                    style={{
                                        background: randomColor,
                                        color: "#fff"
                                    }}
                                >
                                    {item.name.charAt(0)}
                                </ChipContact>
                                {item.name}
                            </Chip>
                        );
                    })}
                </div>
            );
        }
    }
    render() {
        return (
            <Grid className="grid-ruler" style={styles.grid}>
                {this.renderGenresList()}
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        genres: state.homeReducer
    };
};

const mapdispatchToProps = dispatch =>
    bindActionCreators({ fetchAllGenres }, dispatch);

export default connect(mapStateToProps, mapdispatchToProps)(Home);
