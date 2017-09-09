import { HOME_MOVIES } from "../views/Home/actions";

const initialState = {
    data: null
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case HOME_MOVIES.ALL_GENRES_FETCH_SUCCEEDED:
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
