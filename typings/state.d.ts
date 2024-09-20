type NotificationState = {
    queue: NotificationItem[];
};

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
    userPage: number;
    page: number;
    totalMovies: number;
    pending: boolean;
    list: Movie[];
};

type SettingsState = {
    pageSize: 4 | 5 | 10 | 20;
    view: 1 | 2;
    sortPerPage: MovieSort;
};
