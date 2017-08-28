import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import { tmdbApi } from "../../api/index";
import "./top-movies.css";

export default class TopMovies extends React.Component {
    getTopMovies() {
        return (
            <div className="top-movies-wrapper">
                {this.props.movies.map((item, index) => {
                    return (
                        <CardItem
                            title={item.title}
                            src={`${tmdbApi.baseImageUrl + item.poster_path}`}
                            desc={item.overview}
                            key={index}
                            releaseDate ={item.release_date}
                            rating = {item.vote_average}
                        />
                    );
                })}
            </div>
        );
    }
    render() {
        return (
            <div className="top-movies">
                {this.getTopMovies()}
            </div>
        );
    }
}
