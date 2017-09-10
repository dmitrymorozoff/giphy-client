import { call, put } from "redux-saga/effects";
import { tmdbApi } from "../../api/";
import { ACTORS } from "./actions";

export function* fetchActorsList(action) {
    try {
        const data = yield call(() => {
            return fetch(tmdbApi.baseUrl + tmdbApi.actors + tmdbApi.key)
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(error => {
                    console.log(error);
                });
        });
        yield put({
            type: ACTORS.ACTORS_FETCH_SUCCEEDED,
            payload: data.results
        });
    } catch (e) {
        yield put({ type: ACTORS.ACTORS_FETCH_FAILED, message: e.message });
    }
}
