import { tmdbApi } from "../api/index";

export function getTopMovies() {
    return function(dispatch) {
        return fetch(
            tmdbApi.baseUrl + tmdbApi.movie + tmdbApi.key + tmdbApi.type.top
        )
            .then(response => response.json())
            .then(json => {
                console.log(json.results);
                dispatch({
                    type: "GET_TOP_MOVIES",
                    payload: json.results
                });
            });
    };
}
