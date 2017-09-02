import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchActors } from "../api";
import { getTopMovies } from "../views/Top/sagas";

function* getActors(action) {
    try {
        const data = yield call(fetchActors);
        yield put({ type: "ACTORS_FETCH_SUCCEEDED", data: data });
    } catch (e) {
        yield put({ type: "ACTORS_FETCH_FAILED", message: e.message });
    }
}

/*
  Запускаем `fetchUser` на каждый задиспатченый экшен `USER_FETCH_REQUESTED`.
  Позволяет одновременно получать данные пользователей.
*/
function* rootSaga() {
    yield takeEvery("ACTORS_FETCH_REQUEST", getActors);
    yield takeEvery("TOP_MOVIES_FETCH_REQUEST", getTopMovies);
}

/*
  В качестве альтернативы вы можете использовать `takeLatest`.

  Не допускает одновременное получение данных пользователей. Если `USER_FETCH_REQUESTED`
  диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
  то этот ожидающий ответа запрос отменяется и срабатывает только последний.
*/
function* rootSaga() {
    yield takeLatest("ACTORS_FETCH_REQUEST", getActors);
    yield takeLatest("TOP_MOVIES_FETCH_REQUEST", getTopMovies);
}

export default rootSaga;
