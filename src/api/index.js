export const tmdbApi = {
    baseUrl: "https://api.themoviedb.org/3/",
    movie: "discover/movie",
    genres: "genre/movie/list",
    item: "movie",
    actors: "person/popular",
    type: {
        top: "&primary_release_year=2016&page=2",
        popular: "&sort_by=popularity.desc"
    },
    key: "?api_key=191afa11366f646301a60a16fee09d34",
    baseImageUrl: "https://image.tmdb.org/t/p/w500"
};
