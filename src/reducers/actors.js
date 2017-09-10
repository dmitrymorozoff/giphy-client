import { ACTORS } from "../views/Actors/actions";

const initialState = { data: null };

export default function actorsReducer(state = initialState, action) {
    switch (action.type) {
        case ACTORS.ACTORS_FETCH_SUCCEEDED:
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
