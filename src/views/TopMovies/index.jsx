import React from "react";
import CardItem from "../../components/CardItem/index";
import { tmdbApi } from "../../api/index";

const styles = {
    topMovies: {
        width: "100%"
    },
    topMoviesWrapper: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
    }
};

export default class TopMovies extends React.Component {
    getTopMovies() {
        return (
            <div className="top-movies-wrapper" style={styles.topMoviesWrapper}>
                {this.props.movies.map((item, index) => {
                    return (
                        <CardItem
                            title={item.title}
                            src={`${tmdbApi.baseImageUrl + item.poster_path}`}
                            desc={item.overview}
                            key={index}
                            releaseDate={item.release_date}
                            rating={item.vote_average}
                        />
                    );
                })}
            </div>
        );
    }
    render() {
        return (
            <div className="top-movies" style={styles.topMovies}>
                {this.getTopMovies()}
            </div>
        );
    }
}
