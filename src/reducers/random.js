const initialState = [
    {
        slug: "eyes-shocked-bird-feqkVgjJpYtjy",
        rating: "g",
        import_datetime: "2013-03-21 04:03:08"
    }
];

export default function randomReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_RANDOM":
            return [...state, ...action.payload];
            break;
        default:
            return state;
    }
}
