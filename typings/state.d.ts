type MoviePopularState = {
    pending: boolean;
    list: MoviePopular[];
};

type MovieTopRatedState = MoviePopularState;

type MovieSearchState = {
    page: number;
    totalPages: number;
    totalMovies: number;
    pending: boolean;
    list: MovieSearch[];
};
