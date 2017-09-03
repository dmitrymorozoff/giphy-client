import { POPULAR_MOVIES } from "../views/Popular/actions";

const initialState = {
    data: null
};

export default function popularReducer(state = initialState, action) {
    switch (action.type) {
        case POPULAR_MOVIES.POPULAR_MOVIES_FETCH_SUCCEEDED:
            console.log(action.payload);
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
