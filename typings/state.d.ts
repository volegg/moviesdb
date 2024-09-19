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
    query: string;
    pageSize: number;
    userPage: number;
    page: number;
    totalPages: number;
    totalMovies: number;
    pending: boolean;
    list: Movie[];
};
