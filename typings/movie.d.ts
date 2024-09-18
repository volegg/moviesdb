type MoviePopular = {
    rating: number;
    title: string;
    image: string;
    date: string;
};

type MovieTopRated = MoviePopular;

type MovieSearch = MoviePopular & {
    lang: string;
    genreIds: number[];
};
