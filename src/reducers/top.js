import { TOP_MOVIES } from "../views/Top/actions";

const initialState = {
    data: null
};

export default function topReducer(state = initialState, action) {
    switch (action.type) {
        case TOP_MOVIES.TOP_MOVIES_FETCH_SUCCEEDED:
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
