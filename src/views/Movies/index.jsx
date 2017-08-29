import React from "react";
import CardItem from "../../components/CardItem/index";
import { tmdbApi } from "../../api/index";

const styles = {
    allMovies: {
        width: "100%"
    },
    allMoviesWrapper: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
    }
};

export default class Movies extends React.Component {
    render() {
        return (
            <div className="all-movies" style={styles.allMovies}>
               <h1>hELLO</h1>
            </div>
        );
    }
}
