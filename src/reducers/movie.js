import { MOVIE } from "../actions/movie";

const initialState = {
    data: null
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case MOVIE.MOVIE_FETCH_SUCCEEDED:
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
