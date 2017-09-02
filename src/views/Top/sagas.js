import { fetchTopMovies } from "../../api";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

export function* getTopMovies(action) {
    try {
        const data = yield call(fetchTopMovies);
        console.log(data);
        yield put({
            type: "TOP_MOVIES_FETCH_SUCCEEDED",
            payload: data.results
        });
    } catch (e) {
        yield put({ type: "TOP_MOVIES_FETCH_FAILED", message: e.message });
    }
}
