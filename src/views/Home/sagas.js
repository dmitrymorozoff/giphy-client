import { put, call } from "redux-saga/effects";
import { HOME_MOVIES } from "./actions";
import { tmdbApi } from "../../api";

export function* fetchGenresList() {
    try {
        const data = yield call(() => {
            return fetch(tmdbApi.baseUrl + tmdbApi.genres + tmdbApi.key)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    return data;
                })
                .catch(error => {
                    console.log(error);
                });
        });
        yield put({
            type: HOME_MOVIES.ALL_GENRES_FETCH_SUCCEEDED,
            payload: data.genres
        });
    } catch (e) {
        yield put({
            type: HOME_MOVIES.ALL_GENRES_FETCH_FAILED,
            message: e.message
        });
    }
}
