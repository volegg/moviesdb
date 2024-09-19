type MovieGenre = ServerGenreProps;

type MovieGenresState = {
    list: MovieGenre[];
};

type MoviePopularState = {
    pending: boolean;
    list: Movie[];
};

type MovieTopRatedState = MoviePopularState;

type MovieSearchState = {
    page: number;
    totalPages: number;
    totalMovies: number;
    pending: boolean;
    list: Movie[];
};
