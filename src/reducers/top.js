const initialState = [];

export default function trendingReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TOP_MOVIES":
            return [...state, ...action.payload];
            break;
        default:
            return state;
    }
}
