import { call, put } from "redux-saga/effects";
import { TOP_MOVIES } from "./actions";
import { tmdbApi } from "../../api";

export function* fetchTopMovies(action) {
    try {
        const data = yield call(() => {
            return fetch(
                tmdbApi.baseUrl + tmdbApi.movie + tmdbApi.key + tmdbApi.type.top
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
            type: TOP_MOVIES.TOP_MOVIES_FETCH_SUCCEEDED,
            payload: data.results
        });
    } catch (e) {
        yield put({
            type: TOP_MOVIES.TOP_MOVIES_FETCH_FAILED,
            message: e.message
        });
    }
}
