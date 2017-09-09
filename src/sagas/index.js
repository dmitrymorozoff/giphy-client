import { takeLatest } from "redux-saga/effects";
import { fetchTopMovies } from "../views/Top/sagas";
import { fetchPopularMovies } from "../views/Popular/sagas";
import { fetchGenresList } from "../views/Home/sagas";
import { HOME_MOVIES } from "../views/Home/actions";
import { getActors } from "../views/Actors/sagas";
import { TOP_MOVIES } from "../views/Top/actions";
import { POPULAR_MOVIES } from "../views/Popular/actions";
import { fetchMovie } from "./movie";
import { MOVIE } from "../actions/movie";

function* rootSaga() {
    yield [
        takeLatest("ACTORS_FETCH_REQUEST", getActors),
        takeLatest(TOP_MOVIES.TOP_MOVIES_FETCH_REQUEST, fetchTopMovies),
        takeLatest(HOME_MOVIES.ALL_GENRES_FETCH_REQUEST, fetchGenresList),
        takeLatest(
            POPULAR_MOVIES.POPULAR_MOVIES_FETCH_REQUEST,
            fetchPopularMovies
        ),
        takeLatest(MOVIE.MOVIE_FETCH_REQUEST, fetchMovie)
    ];
}

export default rootSaga;
