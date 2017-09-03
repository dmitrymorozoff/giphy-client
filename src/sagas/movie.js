import { call, put } from "redux-saga/effects";
import { MOVIE } from "../actions/movie";
import { tmdbApi } from "../api";

export function* fetchMovie(action) {
    try {
        const data = yield call(() => {
            return fetch(
                tmdbApi.baseUrl +
                    tmdbApi.item +
                    "/" +
                    action.payload +
                    tmdbApi.key
            )
                .then(response => response.json())
                .then(data => {
                    return data;
                });
        });
        console.log(data);
        yield put({
            type: MOVIE.MOVIE_FETCH_SUCCEEDED,
            payload: data
        }).catch(error => {
            console.log(error);
        });
    } catch (error) {}
}
