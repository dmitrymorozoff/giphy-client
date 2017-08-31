const initialState = {
    data: null
};

export default function popularReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_POPULAR_MOVIES":
            return { ...state, data: action.payload };
            break;
        default:
            return state;
    }
}
