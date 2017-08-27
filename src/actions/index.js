import { giphyApi } from "../api/index";

export function getTrending() {
    return function(dispatch) {
        return fetch(giphyApi.baseUrl + giphyApi.trending + giphyApi.key)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "GET_TRENDING",
                    payload: json.data
                });
            });
    };
}
