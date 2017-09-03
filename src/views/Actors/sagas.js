import { call, put } from "redux-saga/effects";
import { fetchActors } from "../../api";

export function* getActors(action) {
    try {
        const data = yield call(fetchActors);
        yield put({ type: "ACTORS_FETCH_SUCCEEDED", data: data });
    } catch (e) {
        yield put({ type: "ACTORS_FETCH_FAILED", message: e.message });
    }
}
