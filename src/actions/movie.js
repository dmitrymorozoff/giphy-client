export const MOVIE = {
    MOVIE_FETCH_REQUEST: "MOVIE_FETCH_REQUEST",
    MOVIE_FETCH_SUCCEEDED: "MOVIE_FETCH_SUCCEEDED",
    MOVIE_FETCH_FAILED: "MOVIE_FETCH_FAILED"
};

export const fetchMovie = id => ({
    type: MOVIE.MOVIE_FETCH_REQUEST,
    payload: id
});
