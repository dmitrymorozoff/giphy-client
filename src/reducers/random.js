const initialState = [];

export default function randomReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_RANDOM":
            return [...state, ...action.payload];
            break;
        default:
            return state;
    }
}
