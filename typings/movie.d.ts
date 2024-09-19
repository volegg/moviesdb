type Movie = {
    rating: number;
    title: string;
    image: string;
    date: string;
    lang: string;
    genreIds: number[];
    lang: string;
    overview: string;
};

type MovieResultList = {
    page: number;
    totalPages: number;
    totalMovies: number;
    list: Movie[];
};
