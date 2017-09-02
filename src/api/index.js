export const tmdbApi = {
    baseUrl: "https://api.themoviedb.org/3/",
    movie: "discover/movie",
    item: "movie",
    type: {
        top: "&primary_release_year=2016&page=2",
        popular: "&sort_by=popularity.desc"
    },
    key: "?api_key=191afa11366f646301a60a16fee09d34",
    baseImageUrl: "https://image.tmdb.org/t/p/w500"
};

export function fetchActors() {
    return fetch(tmdbApi.baseUrl + tmdbApi.item + "/" + "5" + tmdbApi.key)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
        });
}

export const fetchTopMovies = () => {
    return fetch(
        tmdbApi.baseUrl + tmdbApi.movie + tmdbApi.key + tmdbApi.type.top
    )
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
        });
};
