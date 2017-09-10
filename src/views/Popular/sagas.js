import { put, call } from "redux-saga/effects";
import { POPULAR_MOVIES } from "./actions";
import { tmdbApi } from "../../api";

export function* fetchPopularMovies() {
    try {
        const data = yield call(() => {
            return fetch(
                tmdbApi.baseUrl +
                    tmdbApi.movie +
                    tmdbApi.key +
                    tmdbApi.type.popular
            )
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(error => {
                    console.log(error);
                });
        });
        yield put({
            type: POPULAR_MOVIES.POPULAR_MOVIES_FETCH_SUCCEEDED,
            payload: data.results
        });
    } catch (e) {
        yield put({
            type: POPULAR_MOVIES.POPULAR_MOVIES_FETCH_FAILED,
            message: e.message
        });
    }
}
