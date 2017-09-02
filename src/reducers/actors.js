const initialState = {};

export default function actorsReducer(state = initialState, action) {
    switch (action.type) {
        case "ACTORS_FETCH_SUCCEEDED":
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
