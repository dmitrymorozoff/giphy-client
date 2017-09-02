const initialState = {
    data: null
};

export default function trendingReducer(state = initialState, action) {
    switch (action.type) {
        case "TOP_MOVIES_FETCH_SUCCEEDED":
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
