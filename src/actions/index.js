import { tmdbApi } from "../api/index";

export function getPopularMovies() {
    return function(dispatch) {
        return fetch(
            tmdbApi.baseUrl + tmdbApi.movie + tmdbApi.key + tmdbApi.type.popular
        )
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "GET_POPULAR_MOVIES",
                    payload: json.results
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function getInfoAboutMovie(id) {
    return function(dispatch) {
        return fetch(tmdbApi.baseUrl + tmdbApi.item + "/" + id + tmdbApi.key)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "GET_INFO_ABOUT_MOVIE",
                    payload: json
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export const getActors = () => ({
    type: "ACTORS_FETCH_REQUEST"
});

export const getTopMovies = () => ({
    type: "TOP_MOVIES_FETCH_REQUEST"
});
